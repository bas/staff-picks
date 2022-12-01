import { ThemeProvider } from "@primer/react";
import { withLDProvider } from "launchdarkly-react-client-sdk";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default withLDProvider({
  clientSideID: process.env.clientSideID,
  user: { key: "anon", anonymous: true },
  options: {
    bootstrap: "localStorage",
  },
  reactOptions: {
    useCamelCaseFlagKeys: true,
  },
})(App);
