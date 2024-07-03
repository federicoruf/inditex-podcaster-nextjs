"use client";

import { LoadingContext } from "@/context/LoadingContext";
import { Episode } from "@/interfaces/Episode";
import { usePodcastEpisodes } from "@/services/itunesService";
import React, { useContext, useEffect, useState } from "react";

interface EpisodePlayerProps {
  podcastId: string;
  episodeId: string;
}

export const EpisodePlayer: React.FC<EpisodePlayerProps> = ({
  podcastId,
  episodeId,
}) => {
  const { switchLoading } = useContext(LoadingContext);
  const { data, isFetching } = usePodcastEpisodes(podcastId);
  const [displayEpisode, setDisplayEpisode] = useState<Episode>();

  useEffect(() => {
    switchLoading(isFetching);
  }, [isFetching, switchLoading]);
  
  useEffect(() => {
    if (data) {
      const episode = getEpisode(data, episodeId)
      setDisplayEpisode(episode);
    }
  }, [data]);

  const getEpisode = (episodes: Episode[], episodeId: string) => {
    return episodes.find(
      (episode: Episode) => episode.trackId === +episodeId
    ); 
  };

  const formatURL = () => {
    if (displayEpisode && displayEpisode.episodeUrl) {
      return displayEpisode.episodeUrl.split("?")[0];
    }
  };

  const splitLines = (description: string) =>
    description && description.split("\n").map((line, index) => <div key={index}>{line}</div>);

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
