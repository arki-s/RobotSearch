import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Text>test</Text>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
