import { Image, StyleSheet, Platform } from "react-native";

import { Card, Heading, Text } from "@gluestack-ui/themed";

export default function HomeScreen() {
  return (
    <Card size="md" variant="elevated" m="$3">
      <Heading mb="$1" size="md">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  );
}
