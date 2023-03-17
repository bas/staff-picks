import { Box, Heading } from "@primer/react";
import BookItem from "../components/book-item";
import { useFlags } from "launchdarkly-react-client-sdk";
import Banner from "../components/banner";

export default function App() {
  const { showBanner } = useFlags();

  const allBooks = [
    {
      title: "Accelerate: The Science of Lean Software and DevOps",
      author: "Nicole Forsgren and Jez Humble",
      cover: "/images/accelerate.jpg",
      price: "17.99",
      rating: 5,
      ratingCount: 986,
    },
    {
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland",
      cover: "/images/scrum.jpg",
      price: "15.00",
      rating: 3,
      ratingCount: 756,
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      cover: "/images/lean.jpg",
      price: "12.99",
      rating: 4,
      ratingCount: 657,
    },
    {
      title: "The DevOps Handbook",
      author: "Gene Kim and Jez Humble",
      cover: "/images/devops.jpg",
      price: "29.10",
      rating: 5,
      ratingCount: 124,
    },
    {
      title:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
      author: "Steve Krug",
      cover: "/images/think.jpg",
      price: "10.99",
      rating: 4,
      ratingCount: 465,
    },
  ];

  return (
    <>
      <Heading sx={{ fontSize: 3, padding: "0px 12px 12px 12px" }}>
        Staff picks
      </Heading>
      {showBanner && <Banner />}
      <Box>
        <Box display="grid" gridTemplateColumns="1fr" gridGap={3}>
          {allBooks.map((book) => (
            <BookItem key={book.title} book={book} />
          ))}
        </Box>
      </Box>
    </>
  );
}
