import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Episode from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingContext } from "@/context/LoadingContext";

const queryClient = new QueryClient();

describe("Episode", () => {
  test("renders PodcastInformation and EpisodePlayer components", () => {
    const podcastId = "123";
    const episodeId = "456";
    const loading = true;
    const switchLoading = jest.fn();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={{ switchLoading, loading }}>
          <Episode params={{ podcastId, episodeId }} />
        </LoadingContext.Provider>
      </QueryClientProvider>
    );

    const podcastInformation = getByTestId("podcast-information");
    const episodePlayer = getByTestId("episode-player");

    expect(podcastInformation).toBeInTheDocument();
    expect(episodePlayer).toBeInTheDocument();
  });
});
