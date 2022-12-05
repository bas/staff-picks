import {
  Box,
  TextInput,
  Button,
  Popover,
  Text,
  IconButton,
} from "@primer/react";
import { PersonIcon } from "@primer/octicons-react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState, useEffect } from "react";
import { identities } from "../identities";

function LoginForm() {
  const [identity, setIdentity] = useState();
  const [isOpen, setOpen] = useState(false);
  const ldClient = useLDClient();

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

      setOpen(true);
    }
  }

  useEffect(() => {}, [isOpen]);

  function toggleOpen() {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
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
      <Box pt={5} justifyContent="right" display="flex">
        <Popover open={isOpen} caret="top-right">
          <Popover.Content>
            {identity && (
              <Box>
                <Text as="p" color="black">
                  Key: {identity.key}
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
              </Box>
            )}
            <Button onClick={toggleOpen}>Got it!</Button>
          </Popover.Content>
        </Popover>
      </Box>
      {identity && (
        <IconButton
          aria-label="Search"
          icon={PersonIcon}
          onClick={toggleOpen}
          sx={{ marginLeft: ".5rem" }}
        />
      )}
    </Box>
  );
}

export default LoginForm;
