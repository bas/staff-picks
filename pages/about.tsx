import { BaseStyles, Box, Text, PageLayout } from "@primer/react";
import Image from "next/image";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation-bar";
import PageHead from "../components/page-head";
import React from "react";
import PageHeading from "../components/page-heading";

export default function About() {
  return (
    <div className="App">
      <BaseStyles>
        <PageHead />
        <PageLayout sx={{ padding: "0px" }}>
          <PageLayout.Header>
            <NavigationBar />
            <PageHeading headingText="About" />
          </PageLayout.Header>
          <PageLayout.Content>
            <Box padding="0px 12px 12px 12px">
              <Text as="p">Scan the following code to open the website:</Text>
              <Image
                src={`${process.env.assetPrefix}/images/qrcode.png`}
                alt="QR Code"
                height={60}
                width={60}
              />
            </Box>
          </PageLayout.Content>
          <PageLayout.Footer>
            <Footer />
          </PageLayout.Footer>
        </PageLayout>
      </BaseStyles>
    </div>
  );
}
