import { Box, Text } from "@primer/react";

function Banner({ couponCode, discount }) {
  return (
    <Box sx={{ backgroundColor: "#2DA44E", borderRadius: 5, marginTop: 3 }} p={3}>
      <Text sx={{ fontSize: 3, color: "white", fomtWeight: "bold" }}>
        Apply coupon code {couponCode} to get {discount}% discount on checkout!
      </Text>
    </Box>
  );
}

export default Banner;
