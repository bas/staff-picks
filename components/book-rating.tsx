import { Box, Text } from "@primer/react";
import { StarFillIcon } from "@primer/octicons-react";

function BookRating({ stars, ratingCount }) {
  return (
    <Box>
      <Text as="span" sx={{ fontSize: 1 }}>
        Rating:
      </Text>
      <Text as="span" sx={{ fontSize: 1, marginLeft: ".5rem" }}>
        {[...Array(stars)].map((e, i) => (
          <StarFillIcon key={i} size={16} fill="#FFD700" />
        ))}
        {[...Array(5 - stars)].map((e, i) => (
          <StarFillIcon key={i} size={16} fill="#E5E4E2" />
        ))}
      </Text>
      <Text as="span" sx={{ fontSize: 1, marginLeft: ".5rem" }}>({ratingCount} ratings)</Text>
    </Box>
  );
}

export default BookRating;
