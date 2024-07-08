import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoadingContext } from "@/context/LoadingContext";
import { Header } from "./Header";

const switchLoading = jest.fn();

describe("Header", () => {
  test("renders the header component", () => {
    const loading = false;
    render(
      <LoadingContext.Provider value={{ switchLoading, loading }}>
        <Header />
      </LoadingContext.Provider>
    );
    expect(screen.getByRole("link")).toHaveTextContent("Podcaster");
  });

  test("renders the spinner when loading is true", () => {
    const loading = true;
    render(
      <LoadingContext.Provider value={{ switchLoading, loading }}>
        <Header />
      </LoadingContext.Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
