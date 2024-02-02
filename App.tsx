import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider, useSignUp } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from '@env';


export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Text>test</Text>
        </NavigationContainer>
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}
