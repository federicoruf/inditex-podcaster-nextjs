import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { LoadingContext } from "@/context/LoadingContext";
import Link from "next/link";
import { Episode } from "@/interfaces/Episode";
import { formatDate, formatMilliseconds } from "@/utils";
import { CORS, PODCAST_EPISODES } from "@/services/urls";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";

const HOURS_24 = 24 * 60 * 60 * 1000;

const extractEpisodeData = (episodes: Episode[]) =>
  episodes.map((episode) => {
    const {
      description,
      episodeUrl,
      kind,
      releaseDate,
      trackId,
      trackName,
      trackTimeMillis,
    } = episode;
    return {
      description,
      episodeUrl,
      kind,
      releaseDate,
      trackId,
      trackName,
      trackTimeMillis,
    };
  });


const getPodcastEpisodes = async (podcastId: string): Promise<Episode[]> => {
  const response = await axios(
    `${CORS}${encodeURIComponent(PODCAST_EPISODES(podcastId))}`
  );
  return extractEpisodeData(response.data.results);
};

const usePodcastEpisodes = (podcastId: string) => {
  return useQuery<Episode[]>({
    queryKey: ["getPodcastEpisodes", podcastId],
    queryFn: () => getPodcastEpisodes(podcastId),
    gcTime: HOURS_24,
  });
};
type PodcastEpisodesListProps = {
  podcastId: string;
};

export const PodcastEpisodesList = ({
  podcastId,
}: PodcastEpisodesListProps) => {
  const { switchLoading, loading } = useContext(LoadingContext);

  const { status, data, error, isFetching } = usePodcastEpisodes(podcastId);
  
  switchLoading(isFetching);
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const details = await getPodcastEpisodes(podcastId);
      setPodcastEpisodes(details);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col grow w-3/4 ml-12">
      {podcastEpisodes.length > 0 && (
        <>
          <div className="shadow-lg shadow-black-500/20 card flex flex-col text-lg mb-4 pb-2">
            <div className="font-bold"> Episodes: {podcastEpisodes.length}</div>
          </div>
          <div className="shadow-lg shadow-black-500/20 card flex flex-col text-xs">
            <table className="min-w-full text-left">
              <thead className="bg-white font-mediu(m border-b-gray-400 border-b-2">
                <tr>
                  <th className="py-3 pl-2">Title</th>
                  <th className="py-3 pl-2">Date</th>
                  <th className="py-3 pl-2">Duration</th>
                </tr>
              </thead>
              <tbody data-testid="podcastEpisodes">
                {podcastEpisodes.map((episode, index) => (
                  <tr
                    key={episode.trackId}
                    className={classNames("border-b border-b-gray-400 ", {
                      "bg-slate-200": index % 2 === 0,
                      "bg-white": index % 2 === 1,
                    })}
                  >
                    <td className="whitespace-nowrap pl-2 py-3 text-teal-500">
                      <Link
                        href={`/podcast/${podcastId}/episode/${episode.trackId}`}
                      >
                        {episode.trackName}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap pl-2 py-3">
                      {formatDate(episode.releaseDate)}
                    </td>
                    <td className="whitespace-nowrap pl-2 py-3">
                      {episode.trackTimeMillis
                        ? formatMilliseconds(episode.trackTimeMillis)
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
