import { Box, TextInput, Button, Popover, Heading, Text } from "@primer/react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState } from "react";

function LoginForm() {
  const [identity, setIdentity] = useState();
  const [isOpen, setOpen] = useState(false);
  const ldClient = useLDClient();

  const allProfiles = [
    {
      key: "alpha@example.com",
      custom: {
        region: "America",
        country: "United States",
        premium: false,
      },
    },
    {
      key: "bravo@example.com",
      custom: {
        region: "Europe",
        country: "Norway",
        premium: true,
      },
    },
    {
      key: "charlie@example.com",
      custom: {
        region: "Europe",
        country: "United Kingdom",
        premium: false,
      },
    },
    {
      key: "delta@example.com",
      custom: {
        region: "Asia",
        country: "Singapore",
        premium: true,
      },
    },
    {
      key: "echo@example.com",
      custom: {
        region: "America",
        country: "United States",
        premium: true,
      },
    },
    {
      key: "foxtrot@example.com",
      custom: {
        region: "Australia",
        country: "Australia",
        premium: false,
      },
    },
  ];

  async function onSubmit() {
    const num = Math.floor(Math.random() * allProfiles.length)
    setIdentity(allProfiles[num]);

    if (ldClient) {
      ldClient.identify(identity, null, () => {
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
          aria-label="Email"
          name="email"
          placeholder="Email"
          value={identity ? identity.key : ""}
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
                    Country: {identity.custom.country}
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
