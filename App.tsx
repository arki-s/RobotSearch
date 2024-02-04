import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider, SignedIn, SignedOut, useSignUp } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from '@env';


export default function App() {
  return (
    <ClerkProvider publishableKey={(CLERK_PUBLISHABLE_KEY).trim()}>
      <SafeAreaView>
        <GestureHandlerRootView>
          <NavigationContainer>
            <SignedIn>
              <Text>You are Signed in</Text>
            </SignedIn>
            <SignedOut>
              <Text>You are Signed out</Text>
            </SignedOut>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </ClerkProvider>
  );
}
