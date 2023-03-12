import { Box, Text } from "@primer/react";
import PageHeading from "../components/page-heading";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <PageHeading headingText="About" />
      <Box padding="0px 12px 12px 12px">
        <Text as="p">Scan the following code to open the website:</Text>
        <Image
          src={`${process.env.assetPrefix}/images/qrcode.png`}
          alt="QR Code"
          height={120}
          width={120}
        />
      </Box>
    </>
  );
}
