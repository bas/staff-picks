import { Box } from "@primer/react";
import BookItem from "./book-item";

function BookList({ allBooks }) {

  return (
    <Box display="grid" gridTemplateColumns="1fr" gridGap={3}>
      {allBooks.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
    </Box>
  );
}

export default BookList;
