import { Image, Platform, StyleSheet } from "react-native";
import { Card, Box, Heading, Text } from "@gluestack-ui/themed";

export default function TabTwoScreen() {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <Text>Explore</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
  },
});
