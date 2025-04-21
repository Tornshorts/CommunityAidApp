import {Text,View} from 'react-native';
import React from 'react';
import {Stack, Link} from 'expo-router';

export default function NotFound() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>404</Text>
        <Text>Not Found</Text>
        <Link href="/">Go to Home</Link>
      </View>
    </Stack>
  );
}