import { ThemeProvider, BaseStyles, PageLayout } from "@primer/react";
import Footer from "../components/footer";
import PageHead from "../components/page-head";
import NavigationBar from "../components/navigation-bar";
import { AppProps } from "next/app";
import { withLDProvider } from "launchdarkly-react-client-sdk";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="App">
        <BaseStyles>
          <PageHead />
          <PageLayout padding="none">
            <PageLayout.Header>
              <NavigationBar />
            </PageLayout.Header>
            <PageLayout.Content>
              <Component {...pageProps} />
            </PageLayout.Content>
            <PageLayout.Footer>
              <Footer />
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
  },
  reactOptions: {
    useCamelCaseFlagKeys: true,
  },
})(App);
