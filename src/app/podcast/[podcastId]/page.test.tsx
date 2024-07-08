import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Podcast from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingContext } from "@/context/LoadingContext";
import { mockPodcastEpisodes, mockPodcasts } from "@/mocks/mockPodcasts";

const queryClient = new QueryClient();

jest.mock("../../../services/itunesService", () => ({
    usePodcastEpisodes: () => ({
      data: mockPodcastEpisodes,
      isFetching: false,
    }),
    useTopPodcasts: () => ({
        data: mockPodcasts,
        isFetching: false,
      }),
  }));

  
describe("Podcast", () => {
  test("renders PodcastInformation and PodcastEpisodesList components", () => {
    const podcastId = "123";
    const loading = true;
    const switchLoading = jest.fn();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={{ switchLoading, loading }}>
          <Podcast params={{ podcastId }} />
        </LoadingContext.Provider>
      </QueryClientProvider>
    );

    const podcastInformation = getByTestId("podcast-information");
    const podcastEpisodesList = getByTestId("podcast-episodes-list");
    expect(podcastInformation).toBeInTheDocument();
    expect(podcastEpisodesList).toBeInTheDocument();
  });
});
