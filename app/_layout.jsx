import { View, Text, LogBox } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews'
  ]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="exercises" />
      <Stack.Screen 
        name="exerciseDetails" 
        options={{
          presentation: 'modal',
        }} 
      />
    </Stack>
  );
}
