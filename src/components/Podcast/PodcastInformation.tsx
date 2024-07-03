"use client";

import { LoadingContext } from "@/context/LoadingContext";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";
import { useTopPodcasts } from "@/services/itunesService";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

type PodcastInformationProps = {
  podcastId: string;
};

export const PodcastInformation = ({ podcastId }: PodcastInformationProps) => {
  const { data, isFetching } = useTopPodcasts();
  const { switchLoading } = useContext(LoadingContext);
  const [displayPodcast, setDisplayPodcast] = useState<PodcastForComponent>();

  useEffect(() => {
    if (data) {
      setDisplayPodcast(getPodcastDetails(data, podcastId));
    }
  }, [data]);

  useEffect(() => {
    switchLoading(isFetching)
  }, [isFetching, switchLoading]);

  const getPodcastDetails = (data: PodcastForComponent[], podcastId: string) => {
    return data.find(
      (podcast: PodcastForComponent) => podcast.id === podcastId
    );
  };

  return (
    <>
      {displayPodcast && (
        <div className="shadow-lg shadow-black-500/20 card flex flex-col text-xs w-64">
          <Link href={`/podcast/${podcastId}`}>
            <Image
              className="rounded-md py-4"
              src={displayPodcast.imageUrl}
              alt={`${displayPodcast.name}`}
              width={200}
              height={200}
            />
          </Link>
          <div className="border-t-2 py-4">
            <Link href={`/podcast/${podcastId}`}>
              <div className="font-bold">{displayPodcast.name}</div>
            </Link>
            <Link href={`/podcast/${podcastId}`}>
              <div className="italic">by {displayPodcast.artist}</div>
            </Link>
          </div>
          <div className="border-t-2 py-4">
            <div className="font-bold">Description:</div>
            <div className="italic">{displayPodcast.summary}</div>
          </div>
        </div>
      )}
    </>
  );
};
