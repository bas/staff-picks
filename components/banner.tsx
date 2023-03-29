import { StyledOcticon, Flash, Box } from "@primer/react";
import { PinIcon } from "@primer/octicons-react";
import { useFlags } from "launchdarkly-react-client-sdk";

function Banner() {

  const { configureBanner } = useFlags();

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
