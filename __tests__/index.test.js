import { render, screen, fireEvent } from "@testing-library/react";
import App from "../pages/index";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@primer/react";
import { mockFlags, resetLDMocks, ldClientMock } from "jest-launchdarkly-mock";
import LoginForm from "../components/login-form";

describe("App", () => {
  beforeEach(() => {
    resetLDMocks();
  });

  it("renders a heading", () => {
    mockFlags({
      showBanner: false,
      showBookRating: true,
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

  it("calls identify on click", () => {
    render(
      <ThemeProvider>
        <LoginForm />
      </ThemeProvider>
    );
    const signInButton = screen.getAllByRole("button", { name: /Sign in/i });
    fireEvent.click(signInButton[0]);

    // assert: identify gets called
    expect(ldClientMock.identify).toBeCalled();
  });

  it("shows the rating feature", () => {
    mockFlags({
      showBookRating: true,
    });
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const ratings = screen.queryAllByText("Rating:");

    expect(ratings.length).toEqual(5);
  });

  it("hides the rating feature", () => {
    mockFlags({
      showBookRating: false,
    });
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const ratings = screen.queryAllByText("Rating:");

    expect(ratings.length).toEqual(0);
  });

  it("shows the rating feature", () => {
    mockFlags({
      showBanner: true,
      configureBanner: {
        text: "As a premium customer you get unlimited free shipping!",
        variant: "success",
      },
    });
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const banner = screen.queryByTestId("banner");

    expect(banner).toBeInTheDocument();
  });
});
