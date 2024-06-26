const BASE_URL = 'https://itunes.apple.com/';
export const CORS = 'https://api.allorigins.win/raw?url=';
export const TOP_PODCASTS = () =>
  `${BASE_URL}us/rss/toppodcasts/limit=100/genre=1310/json`;
export const PODCAST_EPISODES = (id: string) =>
  `${BASE_URL}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
