import { Box, Text, Button } from "@primer/react";
import Image from "next/image";
import { useFlags } from "launchdarkly-react-client-sdk";
import BookRating from "./book-rating";

function BookList({ allBooks }) {
  const { ffBookRating  } = useFlags();

  return (
    <Box display="grid" gridTemplateColumns="1fr" gridGap={3}>
      {allBooks.map((book) => (
        <Box
          display="flex"
          key={book.title}
          p={2}
          borderColor="border.default"
          borderBottomWidth={1}
          borderBottomStyle="solid"
        >
          <Box width={64}>
            <Image src={book.cover} alt={book.title} height={200} width={200} />
          </Box>
          <Box flexGrow={1}>
            <Box>
              <Text sx={{ fontSize: 2, fontWeight: "bold" }}>{book.title}</Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1 }}>By {book.author}</Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1 }}>&euro;{book.price}</Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Button variant="primary" sx={{ float: "right" }}>
                Add to Cart
              </Button>
            </Box>
            {/* if ffBookRating returns true show the book rating */}
            {ffBookRating && <BookRating stars={book.rating} />}
            {/* End of ffBookRating block */}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default BookList;
