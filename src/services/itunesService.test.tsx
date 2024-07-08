import { usePodcastEpisodes, useTopPodcasts } from "@/services/itunesService";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mockPodcastEpisodes } from "@/mocks/mockPodcasts";
import nock from "nock";
import { renderHook, waitFor } from "@testing-library/react";

type WrapperProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const wrapper = ({ children }: WrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("getPodcastEpisodes", () => {
  test("should fetch podcast episodes and return the extracted data", async () => {
    const id = "12345";
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        results: mockPodcastEpisodes,
      }),
    };

    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => usePodcastEpisodes(id), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.allorigins.win/raw?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D12345%26media%3Dpodcast%26entity%3DpodcastEpisode%26limit%3D20`
    );
    expect(result.current.data).toEqual(mockPodcastEpisodes);
  });
});
