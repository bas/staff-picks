import {
  Box,
  Button,
  Popover,
  Text,
  Heading,
} from "@primer/react";
import { MailIcon } from "@primer/octicons-react";

function Profile({ user, isOpen, setOpen }) {

  return (
    <Box justifyContent="right" display="flex" color="black">
      <Popover open={isOpen} caret="top-right">
        <Popover.Content>
          <Heading sx={{ fontSize: 2 }}>Profile</Heading>
          <Text as="p" sx={{ whiteSpace: "nowrap" }}>
            <MailIcon size={16} /> {user.email}
          </Text>
          <Text as="p">Name: {user.name}</Text>
          <Text as="p">Country: {user.country}</Text>
          <Text as="p">Premium: {user.isPremium ? "Yes" : "No"}</Text>
          <Text as="p">Staff: {user.isStaff ? "Yes" : "No"}</Text>
          <Text as="p">Beta: {user.isBeta ? "Yes" : "No"}</Text>
          <Text as="p">Categories: {user.categories.join(", ")}</Text>
          <Text as="p">Device: {user.device}</Text>
          <Text as="p">OS: {user.operatingSystem}</Text>
          <Box display="flex">
            <Button
              variant="primary"
              onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
            >
              Close
            </Button>
          </Box>
        </Popover.Content>
      </Popover>
    </Box>
  );
}

export default Profile;
