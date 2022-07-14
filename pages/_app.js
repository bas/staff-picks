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
  clientSideID: "62cffb19c2a94210d39fad35",
  user: { anonymous: true },
  options: {
    bootstrap: "localStorage",
  },
})(App);
