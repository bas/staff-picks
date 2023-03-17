import { Header } from "@primer/react";
import { useFlags } from "launchdarkly-react-client-sdk";
import Image from "next/image";
import logoPic from "../public/images/logo.png";
import LoginForm from "./login-form";
import Link from "next/link";
import styles from "./NavigationBar.module.css"

function NavigationBar() {
  const { showLogin } = useFlags();

  return (
    <Header
      sx={{
        paddingRight: "0px",
        backgroundColor: "#000000",
      }}
    >
      <Header.Item>
        <Image src={logoPic} alt="logo" height="20" width="20" />
      </Header.Item>
      <Header.Item>
        <Link className={styles.link} href="/">
          Home
        </Link>
      </Header.Item>
      <Header.Item full>
        <Link className={styles.link} href="/about">
          About
        </Link>
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
