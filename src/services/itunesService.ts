import { Episode } from "@/interfaces/Episode";
import { CORS, HOURS_24, PODCAST_EPISODES, TOP_PODCASTS } from "./urls";
import { Podcast } from "@/interfaces/Podcast";
import { useQuery } from "@tanstack/react-query";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";

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

const getTopPodcasts = async () => {
  try {
    const response = await fetch(
      `${CORS}${encodeURIComponent(TOP_PODCASTS())}`
    );
    if (response.ok) {
      const responseJson = await response.json();
      return extractPodcastData(responseJson.feed.entry);
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    throw error;
  }
};

const getPodcastEpisodes = async (id: string) => {
  try {
    const response = await fetch(
      `${CORS}${encodeURIComponent(PODCAST_EPISODES(id))}`
    );

    //console.log("🚀 ~ getPodcastEpisodes ~ response:", response)
    if (response.ok) {
      const responseJson = await response.json();
      const filteredEpisodes = responseJson.results.filter(
        (episode: Episode) => episode.kind === "podcast-episode"
      );
      return extractEpisodeData(filteredEpisodes);
    } else {
      //console.log('arroja error');
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    throw error;
  }
};

export const usePodcastEpisodes = (podcastId: string) => {
  return useQuery<Episode[]>({
    queryKey: ["getPodcastEpisodes", podcastId],
    queryFn: () => getPodcastEpisodes(podcastId),
    gcTime: HOURS_24,
  });
};

export const useTopPodcasts = () => {
  return useQuery<PodcastForComponent[]>({
    queryKey: ["getTopPodcasts"],
    queryFn: () => getTopPodcasts(),
    gcTime: HOURS_24,
  });
};
