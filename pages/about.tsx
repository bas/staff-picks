import { Box, Text, Heading } from "@primer/react";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <Heading sx={{ fontSize: 3, padding: "0px 12px 12px 12px" }}>
        About
      </Heading>
      <Box
        padding="0px 12px 12px 12px"
        borderColor="border.default"
        borderTopWidth={1}
        borderTopStyle="solid"
      >
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
