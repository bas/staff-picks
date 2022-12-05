import {
  Box,
  TextInput,
  Button,
  Popover,
  Text,
  IconButton,
  Heading,
} from "@primer/react";
import { PersonIcon } from "@primer/octicons-react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState, useEffect } from "react";
import { identities } from "../identities";

function LoginForm() {
  const [identity, setIdentity] = useState();
  const [isOpen, setOpen] = useState(false);
  const ldClient = useLDClient();

  useEffect(() => {}, [isOpen]);

  async function onSubmit() {
    const num = Math.floor(Math.random() * identities.length);

    const newUser = identities[num];

    setIdentity(newUser);

    if (ldClient) {
      ldClient.identify(newUser, null, () => {
        console.log("New user's flags available");

        const userFlags = ldClient.allFlags();
        console.log(userFlags);
      });

      //setOpen(true);
    }
  }

  return (
    <Box display="flex">
      <TextInput
        aria-label="Name"
        name="name"
        placeholder="Name"
        readOnly={true}
        value={identity ? identity.name : ""}
      />
      <Button sx={{ marginLeft: ".5rem" }} onClick={onSubmit}>
        Sign in
      </Button>
      <Box position="relative">
        <IconButton
          aria-label="Profile"
          icon={PersonIcon}
          onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
          sx={{ marginLeft: ".5rem" }}
        />
        {identity && (
          <Box justifyContent="right" display="flex">
            <Popover open={isOpen} caret="top-right">
              <Popover.Content>
                <Heading sx={{ color: "black", fontSize: 2 }}>Profile</Heading>
                <Text as="p" color="black">
                  Key: {identity.key}
                </Text>
                <Text as="p" color="black">
                  Name: {identity.name}
                </Text>
                <Text as="p" color="black">
                  Region: {identity.custom.region}
                </Text>
                <Text as="p" color="black">
                  Country: {identity.country}
                </Text>
                <Text as="p" color="black">
                  Premium: {identity.custom.premium ? "Yes" : "No"}
                </Text>
                <Button
                  onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
                >
                  Got it!
                </Button>
              </Popover.Content>
            </Popover>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default LoginForm;
