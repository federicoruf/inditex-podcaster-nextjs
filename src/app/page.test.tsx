import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Home from "./page";
import { PodcastList } from "@/components";
import { PodcastItem } from "@/components/Podcast/PodcastItem";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../components", () => ({
  PodcastList: jest.fn(() => null),
}));

describe("Home", () => {
  test("renders correctly", () => {
    render(<Home />);

    expect(screen.getByPlaceholderText("Filter podcasts...")).toBeInTheDocument();
    expect(PodcastList).toHaveBeenCalledWith({ filter: "", setResults: expect.any(Function) }, {});
  });

  test("updates filter state on input change", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Filter podcasts...");
    fireEvent.change(input, { target: { value: "joe" } });

    expect((input as HTMLInputElement).value).toBe("joe");
  });
});
