import {
  ThemeProvider,
  BaseStyles,
  PageLayout,
  Box,
  Text,
} from "@primer/react";
import Head from "next/head";
import { AppProps } from "next/app";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import { HeartFillIcon } from "@primer/octicons-react";
import NavigationBar from "../components/navigation-bar";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="App">
        <BaseStyles>
          <Head>
            <title>Staff picks</title>
            <link
              rel="shortcut icon"
              href={`${process.env.assetPrefix}/favicon.svg`}
            />
          </Head>
          <PageLayout padding="none">
            <PageLayout.Header>
              <NavigationBar />
            </PageLayout.Header>
            <PageLayout.Content>
              <Component {...pageProps} />
            </PageLayout.Content>
            <PageLayout.Footer>
              <Box>
                <Text sx={{ fontSize: 1, textAlign: "center" }} as="p">
                  Made with <HeartFillIcon size={16} fill="red" /> by avid
                  readers.
                </Text>
              </Box>
            </PageLayout.Footer>
          </PageLayout>
        </BaseStyles>
      </div>
    </ThemeProvider>
  );
}

export default withLDProvider({
  clientSideID: process.env.clientSideID,
  context: { kind: "user", key: "anon", anonymous: true },
  options: {
    bootstrap: "localStorage",
    application: {
      id: "bas-staff-picks",
      version: process.env.gitSHA,
    }
  },
  reactOptions: {
    useCamelCaseFlagKeys: true,
  },
})(App);
