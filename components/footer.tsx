import { Box, Text } from "@primer/react";
import { HeartFillIcon } from "@primer/octicons-react";

function Footer() {
  return (
    <Box>
      <Text sx={{ fontSize: 1, textAlign: "center" }} as="p">
        Made with <HeartFillIcon size={16} fill="red" /> by avid readers.
      </Text>
    </Box>
  );
}

export default Footer;
