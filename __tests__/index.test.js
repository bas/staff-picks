import { render, screen, fireEvent } from "@testing-library/react";
import App from "../pages/index";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@primer/react";
import { mockFlags, resetLDMocks } from "jest-launchdarkly-mock";

describe("App", () => {
  beforeEach(() => {
    resetLDMocks();
  });

  it("renders a heading", () => {
    mockFlags({
      showBanner: false,
    });
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /Staff picks/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("clicks the buy now button", () => {
    mockFlags({
      showBuyNowButton: true,
      showBanner: false,
    });
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const button = screen.getAllByRole("button", { name: /Buy now/i });
    expect(fireEvent.click(button[0]));
  });
});
