import { StyledOcticon, Flash } from "@primer/react";
import { AlertIcon } from "@primer/octicons-react";

function Banner({ bannerText }) {
  return (
    <Flash variant="warning">
      <StyledOcticon icon={AlertIcon} size={24} />
      {bannerText}
    </Flash>
  );
}

export default Banner;
