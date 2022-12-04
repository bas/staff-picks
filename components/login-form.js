import { Box, TextInput, Button, Popover, Text } from "@primer/react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState } from "react";
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

  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <TextInput
          aria-label="Name"
          name="name"
          placeholder="Name"
          readOnly={true}
          value={identity ? identity.name : ""}
        />
      </Box>
      <Box>
        <Button sx={{ marginLeft: ".5rem" }} onClick={onSubmit}>
          Sign in
        </Button>
        <Box pt={2} justifyContent="right" display="flex">
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
              <Button onClick={() => setOpen(false)}>Got it!</Button>
            </Popover.Content>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;