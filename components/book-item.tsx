import { Box, Text, Button } from "@primer/react";
import Image from "next/image";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import BookRating from "./book-rating";
import { useState } from "react";
import { Book } from "../types/book";

type BookItemProps = {
  book: Book;
};

function BookItem({ book }: BookItemProps) {
  const { showBookRating, showBuyNowButton, applyBookDiscount } = useFlags();
  const ldClient = useLDClient();
  const [isShown, setIsShown] = useState(false);
  const discount = applyBookDiscount ? applyBookDiscount : 0;

  return (
    <Box
      display="flex"
      key={book.title}
      p={2}
      borderColor="border.default"
      borderTopWidth={1}
      borderTopStyle="solid"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      backgroundColor={isShown ? "#F9F9F9" : "#FFFFFF"}
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
          {discount > 0 ? (
            <>
              <Text
                sx={{
                  fontSize: 2,
                  textDecoration: "line-through",
                  color: "red",
                }}
              >
                &euro;{book.price.toFixed(2)}
              </Text>
              &nbsp;
              <Text sx={{ fontSize: 2 }}>
                &euro;{(book.price * ((100 - discount) / 100)).toFixed(2)}
              </Text>
            </>
          ) : (
            <Text sx={{ fontSize: 2 }}>&euro;{book.price.toFixed(2)}</Text>
          )}
        </Box>
        {/* if showBookRating returns true show the book rating */}
        {showBookRating && (
          <BookRating stars={book.rating} ratingCount={book.ratingCount} />
        )}
        {/* End of showBookRating block */}
      </Box>
      <Box>
        <Box>
          <Button
            variant={showBuyNowButton ? "default" : "primary"}
            sx={{ float: "right" }}
            onClick={() => ldClient.track("add-to-cart")}
          >
            Add to cart
          </Button>
        </Box>
        {showBuyNowButton && (
          <Box pt={6}>
            <Button
              variant="primary"
              sx={{ float: "right" }}
              onClick={() => ldClient.track("buy-now")}
            >
              Buy now
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default BookItem;
