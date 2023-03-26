import { Box, Heading } from "@primer/react";
import BookItem from "../components/book-item";
import { useFlags } from "launchdarkly-react-client-sdk";
import Banner from "../components/banner";
import { Book } from "../types/book";
import data from "../books.json";

export default function App() {
  const { showBanner } = useFlags();
  const books: Book[] = data as Book[];

  return (
    <>
      <Heading sx={{ fontSize: 3, padding: "0px 12px 12px 12px" }}>
        Staff picks
      </Heading>
      {showBanner && <Banner />}
      <Box>
        <Box display="grid" gridTemplateColumns="1fr" gridGap={3}>
          {books.map((book) => (
            <BookItem key={book.title} book={book} />
          ))}
        </Box>
      </Box>
    </>
  );
}
