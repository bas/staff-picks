import { StyledOcticon, Flash, Box } from "@primer/react";
import { PinIcon } from "@primer/octicons-react";

function Banner() {
  const configureBanner = {
    variant: "default" as "default" | "success" | "danger" | "warning", // Ensure the variant is one of the allowed types
    text: "Sign up now and get 10% discount" // Replace with a default message
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