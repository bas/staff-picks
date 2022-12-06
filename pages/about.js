import { BaseStyles, Box, Text, PageLayout } from "@primer/react";
import Image from "next/image";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation-bar";
import PageHead from "../components/page-head";
import { identities } from "../identities";
import React from "react";
import PageHeading from "../components/page-heading";

function Cell({ value }) {
  return (
    <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
      {value}
    </Box>
  );
}

export default function About() {
  const columns = [
    "Key",
    "Name",
    "Region",
    "Country",
    "City (private)",
    "Premium",
  ];

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
              <Text as="p">
                Scan the following code to open the website:
              </Text>
              <Image
                src={`${process.env.assetPrefix}/images/qrcode.png`}
                alt="QR Code"
                height={60}
                width={60}
              />
              <Text as="p">
                The following identities are avaiable for targeting:
              </Text>
              <Box
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
                gridGap={1}
              >
                {columns.map((column) => (
                  <Box
                    key={column}
                    p={3}
                    borderColor="border.default"
                    borderWidth={1}
                    borderStyle="solid"
                    fontWeight="bold"
                  >
                    {column}
                  </Box>
                ))}
                {identities.map((identity) => (
                  <React.Fragment key={identity.key}>
                    <Cell value={identity.key} />
                    <Cell value={`${identity.name} ${identity.custom.staff ? "*" : ""}`} />
                    <Cell value={identity.custom.region} />
                    <Cell value={identity.country} />
                    <Cell value={identity.custom.city} />
                    <Cell value={identity.custom.premium ? "Yes" : "No"} />
                  </React.Fragment>
                ))}
              </Box>
              <Text as="p" fontSize={1}>Names marked with a '*' are staff members.</Text>
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
