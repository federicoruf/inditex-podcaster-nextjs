import { useEffect, useState } from "react";
import { hasPassedTimeLimit } from "../utils";
import { Podcast } from "../interfaces/Podcast";
import { Episode } from "../interfaces/Episode";
import { PodcastForComponent } from "../interfaces/PodcastForComponent";
import itunesService from "../services/itunesService";

export const usePodcast = (switchLoading: (value: boolean) => void) => {
  const [podcasts, setPodcasts] = useState<PodcastForComponent[]>([]);

  const extractPodcastData = (podcasts: Podcast[]) =>
    podcasts.map((podcast: Podcast) => {
      return {
        id: podcast.id.attributes["im:id"],
        name: podcast["im:name"]?.label,
        artist: podcast["im:artist"]?.label,
        image: podcast["im:image"][0]?.label,
        summary: podcast.summary?.label,
      };
    });

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

  const onRequestDetails = async (podcastId: string) => {
    switchLoading(true);
    const details = await itunesService.getPodcastEpisodes(podcastId);
    const formattedEpisodes = extractEpisodeData(details);
    const requestTime = new Date().getTime();
    const episodes = formattedEpisodes.filter(
      (item) => item.kind === "podcast-episode"
    );
    localStorage.setItem(podcastId, JSON.stringify({ episodes, requestTime }));
    switchLoading(false);
    return episodes;
  };

  const fetchData = async () => {
    switchLoading(true);
    const resultService = await itunesService.getTopPodcasts();
    const list: PodcastForComponent[] = extractPodcastData(resultService);
    const requestTime = new Date().getTime();
    localStorage.setItem("podcasts", JSON.stringify({ list, requestTime }));
    setPodcasts(list);
    switchLoading(false);
  };

  useEffect(() => {
    const podcastList = localStorage.getItem("podcasts");
    if (!podcastList) {
      fetchData();
    } else {
      const podcastListParsed = JSON.parse(podcastList);
      if (hasPassedTimeLimit(podcastListParsed.requestTime)) {
        fetchData();
      } else {
        setPodcasts(podcastListParsed.list);
      }
    }
  }, []);

  const getFromLocalStorage = (item: string) => {
    const items = localStorage.getItem(item);
    const { list } = items ? JSON.parse(items) : { list: [] };
    return list;
  };

  const getPodcastDetails = (podcastId: string) => {
    const list = getFromLocalStorage('podcasts');
    return list.find(
      (podcast: PodcastForComponent) => podcast.id === podcastId
    );
  };

  const getPodcastEpisodes = async (podcastId: string) => {
    const localStoragePodcast = localStorage.getItem(podcastId);
    if (localStoragePodcast) {
      const parsedPodcast = JSON.parse(localStoragePodcast);
      if (hasPassedTimeLimit(parsedPodcast.requestTime)) {
        return onRequestDetails(podcastId);
      }
      return parsedPodcast.episodes;
    }
    return onRequestDetails(podcastId);
  };

  const getEpisode = (podcastId: string, episodeId: string) => {
    const episodes = getFromLocalStorage('episodes');
    return episodes.find((episode: Episode) => episode.trackId === +episodeId);
  };

  return {
    podcasts,
    getPodcastDetails,
    getPodcastEpisodes,
    getEpisode,
  };
};
