import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PodcastInformation } from "./PodcastInformation";
import { LoadingContext } from "@/context/LoadingContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mockPodcasts } from "../../mocks/mockPodcasts";

const queryClient = new QueryClient();

jest.mock('../../services/itunesService', () => ({
  useTopPodcasts: () => ({
    data: mockPodcasts,
    isFetching: false,
  }),
}));

describe("PodcastInformation", () => {
  it("renders podcast information", () => {
    let loading = true;
    const switchLoading = jest.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={{ switchLoading, loading }}>
          <PodcastInformation podcastId="1535809341" />
        </LoadingContext.Provider>
      </QueryClientProvider>
    );
    const [podcast] = mockPodcasts;

    expect(screen.getByAltText(`${podcast.name}`)).toBeInTheDocument();
    expect(screen.getByText(podcast.name)).toBeInTheDocument();
    expect(screen.getByText(podcast.artist)).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(3);  });
});
