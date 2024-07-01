"use client";

import React, { useState } from "react";
import { PodcastInformation } from "@/components/Podcast/PodcastInformation";
import { PodcastEpisodesList } from "@/components/Episode/PodcastEpisodesList";

type PodcastProps = {
  params: { podcastId: string };
};

export default function Podcast({
  params: { podcastId },
}: PodcastProps) {
  const [filter, setFilter] = useState<string>("");
  const [results, setResults] = useState<number>();

  const onChangeFilter = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFilter(value);
  };

  return (
    <div className='flex flex-row mt-5'>
       <PodcastInformation podcastId={podcastId} />
       <PodcastEpisodesList podcastId={podcastId} />
    </div>
  );
}
