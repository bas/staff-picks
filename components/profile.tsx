import {
  Box,
  Button,
  Popover,
  Text,
  Pagehead,
  Label,
  LabelGroup,
} from "@primer/react";

function Profile({ user, isOpen, setOpen }) {
  return (
    <Box justifyContent="right" display="flex" color="black">
      <Popover open={isOpen} caret="top-right">
        <Popover.Content sx={{ width: "275px", top: "10px" }}>
          <Pagehead
            sx={{
              fontSize: 2,
              padding: "0px 0px 10px 0px",
              fontWeight: "bold",
            }}
          >
            Profile
          </Pagehead>
          <Text as="p" sx={{ whiteSpace: "nowrap" }}>
            Email: <Label>{user.email}</Label>
          </Text>
          <Text as="p">
            Name: <Label>{user.name}</Label>
          </Text>
          <Text as="p">
            Country: <Label>{user.country}</Label>
          </Text>
          <Text as="p">
            Premium: <Label>{user.isPremium ? "Yes" : "No"}</Label>
          </Text>
          <Text as="p">
            Staff: <Label> {user.isStaff ? "Yes" : "No"}</Label>
          </Text>
          <Text as="p">
            Beta: <Label>{user.isBeta ? "Yes" : "No"}</Label>
          </Text>
          <Text as="p">
            Categories:{" "}
            <LabelGroup>
              {user.categories.map((item, i) => (
                <Label key={i}>{item}</Label>
              ))}
            </LabelGroup>
          </Text>
          <Text as="p">
            Device: <Label>{user.device}</Label>
          </Text>
          <Text as="p">
            OS: <Label>{user.operatingSystem}</Label>
          </Text>
          <Button
            variant="primary"
            onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
          >
            Close
          </Button>
        </Popover.Content>
      </Popover>
    </Box>
  );
}

export default Profile;
