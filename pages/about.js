import {
  BaseStyles,
  Text,
  PageLayout,
  Heading,
} from "@primer/react";
import Head from "next/head";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation-bar"

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
            <Text as="p" paddingLeft="12px">About page</Text>
          </PageLayout.Content>
          <PageLayout.Footer>
            <Footer />
          </PageLayout.Footer>
        </PageLayout>
      </BaseStyles>
    </div>
  );
}