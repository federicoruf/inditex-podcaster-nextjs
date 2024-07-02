"use client";

import { Podcast } from "@/interfaces/Podcast";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";
import { CORS, TOP_PODCASTS } from "@/services/urls";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HOURS_24 = 24 * 60 * 60 * 1000;

const extractPodcastData = (podcasts: Podcast[]) => {
  return podcasts.map((podcast: Podcast) => {
    return {
      id: podcast.id.attributes["im:id"],
      name: podcast["im:name"]?.label ?? "",
      artist: podcast["im:artist"]?.label ?? "",
      imageUrl: podcast["im:image"][0]?.label ?? "",
      summary: podcast.summary?.label ?? "",
    };
  });
};

const getTopPodcasts = async (): Promise<PodcastForComponent[]> => {
  const response = await axios(`${CORS}${encodeURIComponent(TOP_PODCASTS())}`);
  return extractPodcastData(response.data.feed.entry);
};

const useTopPodcasts = () => {
  return useQuery<PodcastForComponent[]>({
    queryKey: ["getTopPodcasts"],
    queryFn: () => getTopPodcasts(),
    gcTime: HOURS_24,
  });
};

const getPodcastDetails = (data: PodcastForComponent[], podcastId: string) => {
  return data.find(
    (podcast: PodcastForComponent) => podcast.id === podcastId
  );
};

type PodcastInformationProps = {
  podcastId: string;
};

export const PodcastInformation = ({ podcastId }: PodcastInformationProps) => {
  //const { getPodcastDetails } = usePodcast();
  const { status, data, error, isFetching } = useTopPodcasts();

  const [displayPodcast, setDisplayPodcast] = useState<PodcastForComponent>();

  useEffect(() => {
    if (data) {
      setDisplayPodcast(getPodcastDetails(data, podcastId));
    }
  }, [data]);

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
