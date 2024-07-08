import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { EpisodePlayer } from "./EpisodePlayer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mockPodcastEpisodes } from "../../mocks/mockPodcasts";
import { LoadingContext } from "@/context/LoadingContext";

const queryClient = new QueryClient();

jest.mock("../../services/itunesService", () => ({
  usePodcastEpisodes: () => ({
    data: mockPodcastEpisodes,
    isFetching: false,
  }),
}));

const [mockPodcastEpisode] = mockPodcastEpisodes;

describe("EpisodePlayer", () => {
  const mockPodcastId = "123";

  test("renders episode details when data is available", () => {
    let loading = true;
    const switchLoading = jest.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={{ switchLoading, loading }}>
          <EpisodePlayer
            podcastId={mockPodcastId}
            episodeId={mockPodcastEpisode.trackId.toString()}
          />
        </LoadingContext.Provider>
      </QueryClientProvider>
    );
    expect(screen.getByText(mockPodcastEpisode.trackName)).toBeInTheDocument();

    const regex = new RegExp(mockPodcastEpisode.description.substring(0, 50));
    expect(screen.getByText(regex)).toBeInTheDocument();
    const source = screen.getByTestId("episode-source");
    const [mockedUrl] = mockPodcastEpisode.episodeUrl.split("?");
    expect(source.getAttribute("src")).toBe(mockedUrl);
  });

  //TODO: Override mock data to test empty state
  test.skip("does not render episode details when data is not available", () => {
    let loading = true;
    const switchLoading = jest.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={{ switchLoading, loading }}>
          <EpisodePlayer
            podcastId={mockPodcastId}
            episodeId={mockPodcastEpisode.trackId.toString()}
          />
        </LoadingContext.Provider>
      </QueryClientProvider>
    );

    expect(screen.queryByText(mockPodcastEpisode.trackName)).toBeNull();
    expect(screen.queryByText(mockPodcastEpisode.description)).toBeNull();
    expect(screen.queryByTestId("episode-player")).toBeNull();
  });

  // Add more test cases as needed
});
