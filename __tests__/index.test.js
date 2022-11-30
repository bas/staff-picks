import { render, screen } from "@testing-library/react";
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
      ffPageTitle: "Staff picks",
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
});
