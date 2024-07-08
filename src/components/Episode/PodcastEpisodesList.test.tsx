import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PodcastEpisodesList } from "./PodcastEpisodesList";
import { mockPodcastEpisodes } from "../../mocks/mockPodcasts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingContext } from "@/context/LoadingContext";

const queryClient = new QueryClient();

jest.mock("../../services/itunesService", () => ({
  usePodcastEpisodes: () => ({
    data: mockPodcastEpisodes,
    isFetching: false,
  }),
}));

describe("PodcastEpisodesList", () => {
  const mockPodcastId = "123";

  test("renders the episode list correctly", () => {

    const loading = true;
    const switchLoading = jest.fn();

    render(
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={{ switchLoading, loading }}>
          <PodcastEpisodesList podcastId={mockPodcastId} />
        </LoadingContext.Provider>
      </QueryClientProvider>
    );

    expect(screen.getByText("Episodes: 2")).toBeInTheDocument();
    expect(screen.getByText(mockPodcastEpisodes[0].trackName)).toBeInTheDocument();
    expect(screen.getByText(mockPodcastEpisodes[1].trackName)).toBeInTheDocument();
  });
});
