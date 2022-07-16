import {
  BaseStyles,
  Box,
  PageLayout,
  Header,
  Pagehead,
  Text,
  TextInput,
  Button,
  FormControl,
} from "@primer/react";
import { useState } from "react";
import Head from "next/head";
import { HeartFillIcon } from "@primer/octicons-react";
import BookList from "../components/book-list";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";

function App() {
  const { ffPageHead, ffLogin } = useFlags();
  const [email, setEmail] = useState("");
  const ldClient = useLDClient();

  const allBooks = [
    {
      title: "Scrum: The Art of Doing Twice the Work in Half the Time",
      author: "Jeff Sutherland",
      cover: "/images/scrum.jpg",
      price: "15.00",
      rating: 5,
    },
    {
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",
      author: "Eric Ries",
      cover: "/images/lean.jpg",
      price: "12.99",
      rating: 4,
    },
    {
      title:
        "Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations",
      author: "Nicole Forsgren and Jez Humble",
      cover: "/images/accelerate.jpg",
      price: "17.99",
      rating: 5,
    },
    {
      title: "The Mythical Man-Month: Essays on Software Engineering",
      author: "Frederick P. Brooks Jr.",
      cover: "/images/month.jpg",
      price: "16.90",
      rating: 3,
    },
    {
      title:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
      author: "Steve Krug",
      cover: "/images/think.jpg",
      price: "10.99",
      rating: 4,
    },
  ];

  async function onSubmit() {
    console.log("sign in with email: ", email);
    if (ldClient) {
      const identity = {
        key: email,
      };
      ldClient.identify(identity, null, () => {
        console.log("New user's flags available");
      });

      const userFlags = ldClient.allFlags();
      console.log(userFlags);
    }
  }

  return (
    <div className="App">
      <BaseStyles>
        <Head>
          <title>{ffPageHead}</title>
        </Head>
        <PageLayout>
          <PageLayout.Header>
            <Header>
              <Header.Item>
                <Header.Link href="#">Home</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">Staff picks</Header.Link>
              </Header.Item>
              <Header.Item full>
                <Header.Link href="#">About</Header.Link>
              </Header.Item>
              {ffLogin && (
                <Header.Item>
                  <Box display="flex">
                    <Box flexGrow={1}>
                      <TextInput
                        aria-label="Email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Box>
                    <Box>
                      <Button sx={{ marginLeft: ".5rem" }} onClick={onSubmit}>
                        Sign in
                      </Button>
                    </Box>
                  </Box>
                </Header.Item>
              )}
            </Header>
            <Pagehead sx={{ fontSize: 3, mb: 1 }}>{ffPageHead}</Pagehead>
          </PageLayout.Header>
          <PageLayout.Content>
            <Box height={500}>
              <BookList allBooks={allBooks} />
            </Box>
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
  );
}

export default App;
