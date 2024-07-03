import { PodcastInformation } from "@/components/Podcast/PodcastInformation";
import React from "react";
import { EpisodePlayer } from "@/components/Episode/EpisodePlayer"; // Import the EpisodePlayer component

type EpisodeProps = {
  params: { podcastId: string; episodeId: string };
};

export default function Episode({
  params: { podcastId, episodeId },
}: EpisodeProps) {
  return (
    <div className="flex flex-row mt-5">
      <PodcastInformation podcastId={podcastId} />
      <EpisodePlayer podcastId={podcastId} episodeId={episodeId} />
    </div>
  );
}
