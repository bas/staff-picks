import { ThemeProvider } from "@primer/react";
import { AppProps } from "next/app";
import { withLDProvider } from "launchdarkly-react-client-sdk";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default withLDProvider({
  clientSideID: process.env.clientSideID,
  user: { key: "anon", anonymous: true },
  options: {
    bootstrap: "localStorage",
    privateAttributeNames: ["country"],
  },
  reactOptions: {
    useCamelCaseFlagKeys: true,
  },
})(App);
