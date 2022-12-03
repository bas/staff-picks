import {
  BaseStyles,
  Box,
  PageLayout,
  Heading,
} from "@primer/react";
import Head from "next/head";
import BookList from "../components/book-list";
import { useFlags } from "launchdarkly-react-client-sdk";
import Banner from "../components/banner";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation-bar"

export default function App() {
  const { showBanner } = useFlags();

  const allBooks = [
    {
      title: "Accelerate: The Science of Lean Software and DevOps",
      author: "Nicole Forsgren and Jez Humble",
      cover: "/images/accelerate.jpg",
      price: "17.99",
      rating: 5,
    },
    {
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland",
      cover: "/images/scrum.jpg",
      price: "15.00",
      rating: 5,
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      cover: "/images/lean.jpg",
      price: "12.99",
      rating: 4,
    },
    {
      title: "The DevOps Handbook",
      author: "Gene Kim Jez Humble",
      cover: "/images/devops.jpg",
      price: "29.10",
      rating: 5,
    },
    {
      title:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
      author: "Steve Krug",
      cover: "/images/think.jpg",
      price: "10.99",
      rating: 3,
    },
  ];

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
              Staff picks
            </Heading>
          </PageLayout.Header>
          <PageLayout.Content>
            {showBanner && <Banner bannerText="Apply code HIGHFIVE and get 10% discount on checkout!" />}
            <Box>
              <BookList allBooks={allBooks} />
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
