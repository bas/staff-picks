import { StyledOcticon, Flash, Box } from "@primer/react";
import { PinIcon } from "@primer/octicons-react";

function Banner() {

  const configureBanner = {
    variant: "default", // Replace with an appropriate default variant
    text: "Welcome to our platform!" // Replace with a default message
  };

  return (
    <Box data-testid="banner" padding={2} sx={{ fontWeight: "bold"}}>
      <Flash variant={configureBanner.variant}>
        <StyledOcticon icon={PinIcon} size={24} />
        {configureBanner.text}
      </Flash>
    </Box>
  );
}

export default Banner;
