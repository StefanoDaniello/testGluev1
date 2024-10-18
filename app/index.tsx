import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Box } from '@gluestack-ui/themed';

export default function App() {
  return (
    <View>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Text>index</Text>
        <Link href={'/home'}>Go to Home</Link>
      </Box>
    </View>
  );
}
