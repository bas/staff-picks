import {
  Box,
  TextInput,
  Button,
  Popover,
  Text,
  IconButton,
  Heading,
} from "@primer/react";
import { PersonIcon, MailIcon, SignOutIcon } from "@primer/octicons-react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState, useEffect } from "react";
import { getContext } from "../utils/loginHelper";

function LoginForm() {
  const [identity, setIdentity] = useState();
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState("");
  const ldClient = useLDClient();

  useEffect(() => {}, [isOpen]);

  async function onSignOut() {
    setIdentity();

    if (ldClient) {
      ldClient.identify({ key: "anon", anonymous: true });

      setName("");
    }
  }

  async function onSignIn() {
    const newUser = getContext({ name: name });

    setIdentity(newUser);

    if (ldClient) {
      ldClient.identify(newUser, null, () => {
        console.log("New user's flags available");

        const userFlags = ldClient.allFlags();
        console.log(userFlags);
      });

      setName(newUser.name);
    }
  }

  return (
    <Box display="flex">
      <TextInput
        aria-label="Name"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={identity ? true : false}
      />
      <Button
        sx={{ marginLeft: ".5rem" }}
        onClick={onSignIn}
        disabled={identity ? true : false}
      >
        Sign in
      </Button>
      <IconButton
        icon={SignOutIcon}
        sx={{ marginLeft: ".5rem" }}
        onClick={onSignOut}
        disabled={identity ? false : true}
        aria-label="Sign out"
      />
      <Box position="relative">
        <IconButton
          aria-label="Profile"
          icon={PersonIcon}
          onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
          sx={{ marginLeft: ".5rem" }}
        />
        {identity && (
          <Box justifyContent="right" display="flex" color="black">
            <Popover open={isOpen} caret="top-right">
              <Popover.Content>
                <Heading sx={{ fontSize: 2 }}>Profile</Heading>
                <Text as="p">
                  <MailIcon size={16} /> {identity.email}
                </Text>
                <Text as="p">Name: {identity.name}</Text>
                <Text as="p">Country: {identity.country}</Text>
                <Text as="p">
                  Premium: {identity.custom.premium ? "Yes" : "No"}
                </Text>
                <Text as="p">
                  Staff: {identity.custom.staff ? "Yes" : "No"}
                </Text>
                <Text as="p">Groups: {identity.custom.groups.toString()}</Text>
                <Text as="p">Device: {identity.custom.device}</Text>
                <Text as="p">OS: {identity.custom.operatingSystem}</Text>
                <Box display="flex">
                  <Button
                    variant="primary"
                    onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
                  >
                    Close
                  </Button>
                  <Button onClick={onSignOut} sx={{ marginLeft: ".5rem" }}>
                    Sign out
                  </Button>
                </Box>
              </Popover.Content>
            </Popover>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default LoginForm;
