import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { useFonts } from 'expo-font';
import { ClerkProvider } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from '@env';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'kaisei':require("./assets/fonts/KaiseiOpti-Regular.ttf"),
    'kaisei-bold':require("./assets/fonts/KaiseiOpti-Bold.ttf"),
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }



  return (
    // <ClerkProvider>
    <View style={styles.container}>
     <Login />
      <StatusBar style="auto" />
    </View>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
