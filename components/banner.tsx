import { StyledOcticon, Flash, Box } from "@primer/react";
import { AlertIcon } from "@primer/octicons-react";

function Banner({ bannerText }) {
  return (
    <Box padding={2}>
      <Flash variant="warning">
        <StyledOcticon icon={AlertIcon} size={24} />
        {bannerText}
      </Flash>
    </Box>
  );
}

export default Banner;
