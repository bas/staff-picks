import { Box, TextInput, Button } from "@primer/react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const ldClient = useLDClient();

  async function onSubmit() {
    console.log("sign in with email: ", email);
    if (ldClient) {
      const identity = {
        key: email,
      };
      ldClient.identify(identity, null, () => {
        console.log("New user's flags available");

        const userFlags = ldClient.allFlags();
        console.log(userFlags);
      });
    }
  }

  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <TextInput
          aria-label="Email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box>
        <Button sx={{ marginLeft: ".5rem" }} onClick={onSubmit}>
          Sign in
        </Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
