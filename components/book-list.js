import { Box, Text, Button } from "@primer/react";
import Image from "next/image";
import { useFlags } from "launchdarkly-react-client-sdk";
import BookRating from "./book-rating";

function BookList({ allBooks }) {
  const { ffBookRating, ffBuyNow } = useFlags();

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
          <Box width={80} sx={{ padding: "8px" }}>
            <Image
              src={book.cover}
              alt={book.title}
              height={105}
              width={70} />
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
            {/* if ffBookRating returns true show the book rating */}
            {ffBookRating && <BookRating stars={book.rating} />}
            {/* End of ffBookRating block */}
          </Box>
          <Box>
            <Box>
              <Button variant={ffBuyNow ? "default" : "primary"} sx={{ float: "right" }}>Add to cart</Button>
            </Box>
            {ffBuyNow && (
              <Box pt={6}>
                <Button variant="primary" sx={{ float: "right" }}>
                  Buy now
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default BookList;
