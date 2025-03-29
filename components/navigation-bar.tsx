import { Header } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import LoginForm from "./login-form";
import Link from "next/link";

function NavigationBar() {
  return (
    <Header
      sx={{
        paddingRight: "0px",
        backgroundColor: "#000000",
      }}
    >
      <Header.Item>
        <MarkGithubIcon size={20} />
      </Header.Item>
      <Header.Item>
        <Link href="/">
          <Header.Link as="span">Home</Header.Link>
        </Link>
      </Header.Item>
      <Header.Item full>
        <Link href="/about">
          <Header.Link as="span">About</Header.Link>
        </Link>
      </Header.Item>
      <Header.Item>
        <LoginForm />
      </Header.Item>
    </Header>
  );
}

export default NavigationBar;
