import { render, screen, fireEvent } from "@testing-library/react";
import App from "../pages/index";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@primer/react";
import LoginForm from "../components/login-form";
import BookItem from "../components/book-item";

const mockBook = {
  title: "Sample Book",
  author: "Author Name",
  price: 20,
  rating: 4,
  ratingCount: 100,
  cover: "/images/sample.jpg",
};

describe("App", () => {
  it("renders a heading", () => {
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
    render(
      <ThemeProvider>
        <BookItem book={mockBook} showBuyNowButton={true} />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: /Buy now/i });
    expect(button).toBeEnabled();
    fireEvent.click(button);
  });

  it("calls identify on click", () => {
    render(
      <ThemeProvider>
        <LoginForm />
      </ThemeProvider>
    );
    const signInButton = screen.getAllByRole("button", { name: /Sign in/i });
    fireEvent.click(signInButton[0]);
  });

  it("clicks the add to cart button", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const addToCartButton = screen.getAllByRole("button", { name: /Add to cart/i });
    expect(fireEvent.click(addToCartButton[0]));
  });
});
