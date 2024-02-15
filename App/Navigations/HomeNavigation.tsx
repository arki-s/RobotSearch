import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/Home';
import RobotListByCategory from '../Screens/RobotsScreen/RobotListByCategory';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="robotListCategory" component={RobotListByCategory} />

    </Stack.Navigator>
  )
}
