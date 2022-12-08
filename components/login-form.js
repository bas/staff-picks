import {
  Box,
  TextInput,
  Button,
  Popover,
  Text,
  IconButton,
  Heading,
} from "@primer/react";
import { PersonIcon, MailIcon } from "@primer/octicons-react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { useState, useEffect } from "react";
import { deviceType, osName } from "react-device-detect";
import { uniqueNamesGenerator, names } from "unique-names-generator";

function LoginForm() {
  const [identity, setIdentity] = useState();
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState("");
  const ldClient = useLDClient();

  useEffect(() => {}, [isOpen]);

  function getContext() {
    const countries = [
      "United States",
      "Canada",
      "Japan",
      "Singapore",
      "Norway",
      "United Kingdom",
      "The Netherlands",
      "Germany",
      "Indonesia",
      "Australia",
      "India",
      "Namibia",
      "France",
      "Italy",
      "Chile",
    ];

    const randomCountry = uniqueNamesGenerator({
      dictionaries: [countries],
    });

    let randomName = uniqueNamesGenerator({
      dictionaries: [names],
    });

    if (name.length > 2) randomName = name;

    const email = randomName.toLowerCase() + "@example.com";

    let userContext = {
      key: email,
      email: email,
      name: randomName,
      country: randomCountry,
      custom: {
        premium: Math.random() < 0.5,
        staff: Math.random() < 0.5,
        device: deviceType,
        operatingSystem: osName,
      },
    };
    return userContext;
  }

  async function onSubmit() {
    const newUser = getContext();

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
                <Text as="p">Device: {identity.custom.device}</Text>
                <Text as="p">OS: {identity.custom.operatingSystem}</Text>
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
