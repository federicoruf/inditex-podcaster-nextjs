import React, { useContext, useEffect, useMemo } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";
import { PodcastItem } from "./PodcastItem";
import { useTopPodcasts } from "@/services/itunesService";

interface PodcastListProps {
  filter: string;
  setResults: (value: number) => void;
}
export const PodcastList: React.FC<PodcastListProps> = ({
  filter = "",
  setResults,
}) => {
  const { switchLoading } = useContext(LoadingContext);
  const { data, isFetching } = useTopPodcasts();

  useEffect(() => {
    switchLoading(isFetching);
  }, [isFetching, switchLoading]);

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
  }, [data, displayPodcasts, setResults]);

  return (
    <div className="flex flex-row flex-wrap mx-10 justify-center">
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
