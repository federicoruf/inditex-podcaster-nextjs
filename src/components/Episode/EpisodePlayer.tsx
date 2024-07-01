'use client';

import { usePodcast } from "@/hook/usePodcast";
import { Episode } from "@/interfaces/Episode";
import React, { useEffect, useState } from "react";

interface EpisodePlayerProps {
  podcastId: string;
  episodeId: string;
}

export const EpisodePlayer: React.FC<EpisodePlayerProps> = ({
  podcastId,
  episodeId,
}) => {
  const { getEpisode } = usePodcast();
  const [displayEpisode, setDisplayEpisode] = useState<Episode>();

  useEffect(() => {
    setDisplayEpisode(getEpisode(podcastId, episodeId));
  }, []);

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
