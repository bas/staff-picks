import {
  Box,
  TextInput,
  Button,
  IconButton,
} from "@primer/react";
import { PersonIcon, SignOutIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";
import { getContext } from "../utils/loginHelper";
import { UserContext } from "../types/custom-context";
import Profile from "./profile";

function LoginForm() {
  const [identity, setIdentity] = useState<any>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  useEffect(() => {}, [isOpen]);

  async function onSignOut() {
    setIdentity(null);
    setName("");
  }

  async function onSignIn() {
    const newUser: UserContext = getContext({ name: name });
    setIdentity(newUser);
    setName(newUser.name);
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
          disabled={identity ? false : true}
          onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
          sx={{ marginLeft: ".5rem" }}
        />
        {identity && (
          <Profile user={identity} isOpen={isOpen} setOpen={setOpen} />
        )}
      </Box>
    </Box>
  );
}

export default LoginForm;
