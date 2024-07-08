import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { PodcastItem } from "./PodcastItem";
import { mockPodcasts } from "../../mocks/mockPodcasts";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const [podcast] = mockPodcasts;

describe("PodcastItem", () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders podcast item correctly", () => {
    render(
      <PodcastItem
        id={podcast.id}
        name={podcast.name}
        artist={podcast.artist}
        imageUrl={podcast.imageUrl}
      />
    );

    expect(screen.getByText(podcast.name.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(`Author: ${podcast.artist}`)).toBeInTheDocument();
    expect(screen.getByAltText(podcast.name)).toBeInTheDocument();
  });

  test("navigates to podcast details on click", () => {

    render(
      <PodcastItem
        id={podcast.id}
        name={podcast.name}
        artist={podcast.artist}
        imageUrl={podcast.imageUrl}
      />
    );

    fireEvent.click(screen.getByAltText(podcast.name));

    expect(mockRouterPush).toHaveBeenCalledWith(`/podcast/${podcast.id}`);
  });
});
