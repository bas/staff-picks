import {
  ThemeProvider,
  BaseStyles,
  PageLayout,
  Box,
  Text,
} from "@primer/react";
import Head from "next/head";
import { AppProps } from "next/app";
import { HeartFillIcon } from "@primer/octicons-react";
import NavigationBar from "../components/navigation-bar";
import { MarkGithubIcon } from "@primer/octicons-react";

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
                  Made with <HeartFillIcon size={16} fill="red" /> by <MarkGithubIcon size={16} />
                </Text>
              </Box>
            </PageLayout.Footer>
          </PageLayout>
        </BaseStyles>
      </div>
    </ThemeProvider>
  );
}

export default App;
