import { Image, StyleSheet, Platform } from "react-native";
import { Card, Box, Heading, Text } from "@gluestack-ui/themed";
import myTheme from "@/components/myTheme";
export default function HomeScreen() {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <Image
        source={{ uri: "https://example.com/your-image-url.jpg" }}
        resizeMode="cover"
      />
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="lg" color={myTheme.primary}>
          Quick Start
        </Heading>
        <Text size="sm" textAlign="center">
          Start building your next project in minutes
        </Text>
      </Card>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
  },
});
