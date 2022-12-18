import { Header } from "@primer/react";
import { useFlags } from "launchdarkly-react-client-sdk";
import Image from "next/image";
import logoPic from "../public/images/logo.png";
import LoginForm from "./login-form";

function NavigationBar() {
  const { showLogin, controlBackgroundColor } = useFlags();

  return (
    <Header
      sx={{
        paddingRight: "0px",
        backgroundColor: `${
          controlBackgroundColor ? controlBackgroundColor : "#000000"
        }`,
      }}
    >
      <Header.Item>
        <Image src={logoPic} alt="logo" height="20" width="20" />
      </Header.Item>
      <Header.Item>
        <Header.Link href={`${process.env.assetPrefix}/`}>Home</Header.Link>
      </Header.Item>
      <Header.Item full>
        <Header.Link href={`${process.env.assetPrefix}/about`}>
          About
        </Header.Link>
      </Header.Item>
      {showLogin && (
        <Header.Item>
          <LoginForm />
        </Header.Item>
      )}
    </Header>
  );
}

export default NavigationBar;
