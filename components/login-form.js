import { Box, TextInput, Button, Popover, Text } from "@primer/react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState } from "react";

function LoginForm() {
  const [identity, setIdentity] = useState();
  const [isOpen, setOpen] = useState(false);
  const ldClient = useLDClient();

  const allProfiles = [
    {
      key: "alpha@example.com",
      email: "alpha@example.com",
      name: "Alpha",
      country: "United States",
      custom: {
        region: "America",
        premium: false,
      },
    },
    {
      key: "bravo@example.com",
      email: "bravo@example.com",
      name: "Bravo",
      country: "Norway",
      custom: {
        region: "Europe",
        premium: true,
      },
    },
    {
      key: "charlie@example.com",
      email: "charlie@example.com",
      name: "Charlie",
      country: "United Kingdom",
      custom: {
        region: "Europe",
        premium: false,
      },
    },
    {
      key: "delta@example.com",
      email: "delta@example.com",
      name: "Delta",
      country: "Singapore",
      custom: {
        region: "Asia",
        premium: true,
      },
    },
    {
      key: "echo@example.com",
      email: "echo@example.com",
      name: "Echo",
      country: "United States",
      custom: {
        region: "America",
        premium: true,
      },
    },
    {
      key: "foxtrot@example.com",
      email: "foxtrot@example.com",
      name: "Foxtrot",
      country: "Australia",
      custom: {
        region: "Australia",
        premium: false,
      },
    },
  ];

  async function onSubmit() {
    const num = Math.floor(Math.random() * allProfiles.length);

    const newUser = allProfiles[num];

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
