"use client";

import { Episode } from "@/interfaces/Episode";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";
import { CORS, PODCAST_EPISODES } from "@/services/urls";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HOURS_24 = 24 * 60 * 60 * 1000;

const extractEpisodeData = (episodes: Episode[]) =>
  episodes.map((episode) => {
    const {
      description,
      episodeUrl,
      kind,
      releaseDate,
      trackId,
      trackName,
      trackTimeMillis,
    } = episode;
    return {
      description,
      episodeUrl,
      kind,
      releaseDate,
      trackId,
      trackName,
      trackTimeMillis,
    };
  });

const getPodcastEpisodes = async (podcastId: string): Promise<Episode[]> => {
  const response = await axios(
    `${CORS}${encodeURIComponent(PODCAST_EPISODES(podcastId))}`
  );
  return extractEpisodeData(response.data.results);
};

const usePodcastEpisodes = (podcastId: string) => {
  return useQuery<Episode[]>({
    queryKey: ["getPodcastEpisodes", podcastId],
    queryFn: () => getPodcastEpisodes(podcastId),
    gcTime: HOURS_24,
  });
};

const getEpisode = (episodes: Episode[], episodeId: string) => {
  return episodes.find(
    (episode: Episode) => episode.trackId === +episodeId
  ); 
};

interface EpisodePlayerProps {
  podcastId: string;
  episodeId: string;
}

export const EpisodePlayer: React.FC<EpisodePlayerProps> = ({
  podcastId,
  episodeId,
}) => {
  const { status, data, error, isFetching } = usePodcastEpisodes(podcastId);

  const [displayEpisode, setDisplayEpisode] = useState<Episode>();

  useEffect(() => {
    if (data) {
      setDisplayEpisode(getEpisode(data, episodeId));
    }
  }, [data]);

  const formatURL = () => {
    if (displayEpisode) {
      return displayEpisode.episodeUrl.split("?")[0];
    }
  };

  const splitLines = (description: string) =>
    description.split("\n").map((line, index) => <div key={index}>{line}</div>);

  return (
    <div className="flex flex-col grow w-3/4">
      {displayEpisode && (
        <div className="shadow-lg shadow-black-500/20 card text-xs">
          <div className="font-bold text-lg pb-3">
            {displayEpisode.trackName}
          </div>
          <div className="pb-3">{splitLines(displayEpisode.description)}</div>
          <audio controls className="pb-3 w-full" data-testid="episode-player">
            <source src={formatURL()} type="audio/mp3" />
          </audio>
        </div>
      )}
    </div>
  );
};
