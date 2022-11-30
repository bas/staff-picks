import { Box, Text } from "@primer/react";

function Banner({ couponCode, discount }) {
  return (
    <Box sx={{ backgroundColor: "#FF1493", borderRadius: 5, width: "fit-content", margin: "1em auto" }} p={3}>
      <Text sx={{ fontSize: 3, color: "white", fomtWeight: "bold" }}>
        Apply coupon code {couponCode} to get {discount}% discount on checkout!
      </Text>
    </Box>
  );
}

export default Banner;
