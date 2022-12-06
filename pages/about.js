import { BaseStyles, Box, Text, PageLayout, Heading } from "@primer/react";
import Head from "next/head";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation-bar";
import { identities } from "../identities";
import React from "react";

export default function About() {
  return (
    <div className="App">
      <BaseStyles>
        <Head>
          <title>Staff picks</title>
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <PageLayout sx={{ padding: "0px" }}>
          <PageLayout.Header>
            <NavigationBar />
            <Heading sx={{ fontSize: 3, padding: "12px 12px 0px 12px" }}>
              About
            </Heading>
          </PageLayout.Header>
          <PageLayout.Content>
            <Box padding="12px">
              <Text as="p">
                The following identities are avaiable for targeting:
              </Text>
              <Box
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
                gridGap={1}
              >
                <Box
                  p={3}
                  borderColor="border.default"
                  borderWidth={1}
                  borderStyle="solid"
                  fontWeight="bold"
                >
                  Key
                </Box>
                <Box
                  p={3}
                  borderColor="border.default"
                  borderWidth={1}
                  borderStyle="solid"
                  fontWeight="bold"
                >
                  Name
                </Box>
                <Box
                  p={3}
                  borderColor="border.default"
                  borderWidth={1}
                  borderStyle="solid"
                  fontWeight="bold"
                >
                  Region
                </Box>
                <Box
                  p={3}
                  borderColor="border.default"
                  borderWidth={1}
                  borderStyle="solid"
                  fontWeight="bold"
                >
                  Country
                </Box>
                <Box
                  p={3}
                  borderColor="border.default"
                  borderWidth={1}
                  borderStyle="solid"
                  fontWeight="bold"
                >
                  City (private)
                </Box>
                <Box
                  p={3}
                  borderColor="border.default"
                  borderWidth={1}
                  borderStyle="solid"
                  fontWeight="bold"
                >
                  Premium
                </Box>
                {identities.map((identity) => (
                  <React.Fragment key={identity.key}>
                    <Box
                      p={3}
                      borderColor="border.default"
                      borderWidth={1}
                      borderStyle="solid"
                    >
                      {identity.key}
                    </Box>
                    <Box
                      p={3}
                      borderColor="border.default"
                      borderWidth={1}
                      borderStyle="solid"
                    >
                      {identity.name}
                    </Box>
                    <Box
                      p={3}
                      borderColor="border.default"
                      borderWidth={1}
                      borderStyle="solid"
                    >
                      {identity.custom.region}
                    </Box>
                    <Box
                      p={3}
                      borderColor="border.default"
                      borderWidth={1}
                      borderStyle="solid"
                    >
                      {identity.country}
                    </Box>
                    <Box
                      p={3}
                      borderColor="border.default"
                      borderWidth={1}
                      borderStyle="solid"
                    >
                      {identity.custom.city}
                    </Box>
                    <Box
                      p={3}
                      borderColor="border.default"
                      borderWidth={1}
                      borderStyle="solid"
                    >
                      {identity.custom.premium ? "Yes" : "No"}
                    </Box>
                  </React.Fragment>
                ))}
              </Box>
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
