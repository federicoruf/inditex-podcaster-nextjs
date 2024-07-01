'use client';

import { usePodcast } from "@/hook/usePodcast";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type PodcastInformationProps = {
  podcastId: string;
};

export const PodcastInformation = ({ podcastId }: PodcastInformationProps) => {
  const { getPodcastDetails } = usePodcast();

  const [displayPodcast, setDisplayPodcast] = useState<PodcastForComponent>();

  useEffect(() => {
    setDisplayPodcast(getPodcastDetails(podcastId));
  }, []);

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
