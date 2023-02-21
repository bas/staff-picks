import { StyledOcticon, Flash, Box } from "@primer/react";
import { BookIcon } from "@primer/octicons-react";

function Banner({ bannerText }) {
  return (
    <Box padding={2} sx={{ fontWeight: "bold"}}>
      <Flash>
        <StyledOcticon icon={BookIcon} size={24} />
        {bannerText}
      </Flash>
    </Box>
  );
}

export default Banner;
