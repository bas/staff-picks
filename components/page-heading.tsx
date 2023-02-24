import { Heading } from "@primer/react";

export default function PageHeading({headingText}) {
  return (
    <Heading sx={{ fontSize: 3, padding: "12px 12px 0px 12px" }}>
      {headingText}
    </Heading>
  );
}
