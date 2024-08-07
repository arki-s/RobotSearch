import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider, SignedIn, SignedOut, useSignUp } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from '@env';
import Signup from './App/LoginScreen/Signup';
import Login from './App/LoginScreen/Login';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
import { ToastProvider } from 'react-native-toast-notifications';
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};


export default function App() {
  const [fontsLoaded] = useFonts({
    'kaisei': require('./assets/fonts/KaiseiOpti-Medium.ttf')
  });

  return (
    <ClerkProvider publishableKey={(CLERK_PUBLISHABLE_KEY).trim()} tokenCache={tokenCache}>
      <SafeAreaView style={styles.container}>
        <ToastProvider>
          {/* <GestureHandlerRootView> */}

          <SignedIn>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>

          <SignedOut>
            <Login />
          </SignedOut>

          {/* </GestureHandlerRootView> */}
        </ToastProvider>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20

  },
});
