import {
  Header,
} from "@primer/react";
import { useFlags } from "launchdarkly-react-client-sdk";
import Image from "next/image";
import logoPic from "../public/images/logo.png";
import LoginForm from "./login-form";

function NavigationBar() {
  const { ffLogin } = useFlags();

  return (
    <Header>
      <Header.Item>
        <Image src={logoPic} alt="logo" height="20" width="20" />
      </Header.Item>
      <Header.Item>
        <Header.Link href="/">Home</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link href="#">Staff picks</Header.Link>
      </Header.Item>
      <Header.Item full>
        <Header.Link href="/about">About</Header.Link>
      </Header.Item>
      {ffLogin && (
        <Header.Item>
          <LoginForm />
        </Header.Item>
      )}
    </Header>
  );
}

export default NavigationBar;
