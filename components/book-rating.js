import { Box, Text } from "@primer/react";
import { StarFillIcon } from "@primer/octicons-react";

function BookRating({ stars }) {
  return (
    <Box pt={6}>
      <Text as="span" sx={{ fontSize: 1 }}>
        Rating:
      </Text>
      <Text as="span" sx={{ fontSize: 1, marginLeft: ".5rem" }}>
        {[...Array(stars)].map((e, i) => (
          <StarFillIcon key={i} size={16} fill="#FFD700" />
        ))}
      </Text>
    </Box>
  );
}

export default BookRating;
