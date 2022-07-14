import { Box, Text, Button } from "@primer/react";
import Image from "next/image";

function BookList({ allBooks }) {
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
              <Text sx={{ fontSize: 1, fontWeight: "bold" }}>
                {book.title}
              </Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1}}>By {book.author}</Text>
            </Box>
            <Box>
              <Text sx={{ fontSize: 1 }}>&euro;{book.price}</Text>
            </Box>
          </Box>
          <Box>
            <Button variant="primary">Add to Cart</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default BookList;
