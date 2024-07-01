import React, { useContext, useEffect, useMemo } from 'react';
import { LoadingContext } from '@/context/LoadingContext';
import { PodcastForComponent } from '@/interfaces/PodcastForComponent';
import { PodcastItem } from './PodcastItem';
import { usePodcast } from '@/hook/usePodcast';

interface PodcastListProps {
    filter: string;
    setResults: (value: number) => void;
}   
export const PodcastList: React.FC<PodcastListProps> = ({ filter = '', setResults }) => {

  const { switchLoading, loading } = useContext(LoadingContext);
  const { podcasts } = usePodcast(switchLoading);

  const displayPodcasts: PodcastForComponent[] = useMemo(() => {
    if (podcasts.length > 0) {
      if (filter) {
        return podcasts.filter(
          ({ name, artist }: PodcastForComponent) =>
            name.toLowerCase().includes(filter) ||
            artist.toLowerCase().includes(filter)
        );
      } else {
        return podcasts;
      }
    } else {
      return [];
    }
  }, [filter, podcasts]);

  useEffect(() => {
    if (podcasts.length > 0) {
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
