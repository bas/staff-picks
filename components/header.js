import {
  Box,
  Header,
  TextInput,
  Button,
} from "@primer/react";
import Image from "next/image";
import logoPic from "../public/images/logo.png";

function PageHeader() {
  return (
    <Header>
      <Header.Item>
        <Image src={logoPic} alt="logo" height="20" width="20" />
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Home</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Staff picks</Header.Link>
      </Header.Item>
      <Header.Item full>
        <Header.Link href="/about">About</Header.Link>
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
  );
}

export default PageHeader;
