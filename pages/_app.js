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
  clientSideID: "635a9aa877d6c11186dd3f8c",
  user: { key: "anon", anonymous: true },
  options: {
    bootstrap: "localStorage",
  },
  reactOptions: {
    useCamelCaseFlagKeys: false,
  },
})(App);
