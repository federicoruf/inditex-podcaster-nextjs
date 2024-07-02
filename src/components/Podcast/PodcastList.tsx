import React, { useContext, useEffect, useMemo } from 'react';
import { LoadingContext } from '@/context/LoadingContext';
import { PodcastForComponent } from '@/interfaces/PodcastForComponent';
import { PodcastItem } from './PodcastItem';
import { usePodcast } from '@/hook/usePodcast';
import { CORS, TOP_PODCASTS } from '@/services/urls';
import { useQuery } from '@tanstack/react-query';
import { Podcast } from '@/interfaces/Podcast';
import axios from 'axios';

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
  const response = await axios(
    `${CORS}${encodeURIComponent(TOP_PODCASTS())}`
  );
  return extractPodcastData(response.data.feed.entry);
}


const useTopPodcasts = () => {
  return useQuery<PodcastForComponent[]>({
    queryKey: ['getTopPodcasts'],
    queryFn: () => getTopPodcasts(),
    gcTime: HOURS_24,
  })
}

interface PodcastListProps {
  filter: string;
  setResults: (value: number) => void;
}   
export const PodcastList: React.FC<PodcastListProps> = ({ filter = '', setResults }) => {

  const { switchLoading, loading } = useContext(LoadingContext);
  const { status, data, error, isFetching } = useTopPodcasts();
  switchLoading(isFetching);

  const displayPodcasts: PodcastForComponent[] = useMemo(() => {
    if (data && data.length > 0) {
      if (filter) {
        return data.filter(
          ({ name, artist }: PodcastForComponent) =>
            name.toLowerCase().includes(filter) ||
            artist.toLowerCase().includes(filter)
        );
      } else {
        return data;
      }
    } else {
      return [];
    }
  }, [filter, data]);

  useEffect(() => {
    if (data && data.length > 0) {
      setResults(displayPodcasts.length);
    }
  }, [displayPodcasts]);

  return (
    <div className='flex flex-row flex-wrap mx-10 justify-center'>
      {displayPodcasts.map(({ id, name, artist, imageUrl }) => (
        <PodcastItem
          key={id}
          id={id}
          name={name}
          artist={artist}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};
