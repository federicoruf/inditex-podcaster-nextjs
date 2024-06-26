import React, { SetStateAction, useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { LoadingContext } from '@/app/context/LoadingContext';
import { usePodcast } from '@/app/hook/usePodcast';
import { PodcastForComponent } from '@/app/interfaces/PodcastForComponent';

interface PodcastListProps {
    filter: string;
    setResults: (value: number) => void;
}   

interface LoadingContextType {
  switchLoading: () => void;
}
    
export const PodcastList: React.FC<PodcastListProps> = ({ filter = '', setResults }) => {

  const { switchLoading } = useContext(LoadingContext);
  const { podcasts } = usePodcast(switchLoading);

  const displayPodcasts = useMemo(() => {
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
          image={imageUrl}
        />
      ))}
    </div>
  );
};

PodcastList.propTypes = {
  filter: PropTypes.string,
  setResults: PropTypes.func,
};
