import { Box, Text, Button } from "@primer/react";
import Image from "next/image";
import { useFlags } from "launchdarkly-react-client-sdk";
import BookRating from "./book-rating";

function BookList({ allBooks }) {
  const { showBookRating, showBuyNowButton } = useFlags();

  return (
    <Box display="grid" gridTemplateColumns="1fr" gridGap={3}>
      {allBooks.map((book) => (
        <Box
          display="flex"
          key={book.title}
          p={2}
          borderColor="border.default"
          borderTopWidth={1}
          borderTopStyle="solid"
        >
          <Box
            width={70}
            sx={{
              padding: "5px 5px 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={`${process.env.assetPrefix}${book.cover}`}
              alt={book.title}
              height={90}
              width={60}
            />
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
            {showBookRating && <BookRating stars={book.rating} />}
            {/* End of ffBookRating block */}
          </Box>
          <Box>
            <Box>
              <Button
                variant={showBuyNowButton ? "default" : "primary"}
                sx={{ float: "right" }}
              >
                Add to cart
              </Button>
            </Box>
            {showBuyNowButton && (
              <Box pt={6}>
                <Button
                  variant="primary"
                  sx={{ float: "right" }}
                  onClick={() => console.log("Buy now button clicked.")}
                >
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
