import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/HomeScreen/Home';
import RobotListByCategory from '../Screens/RobotsScreen/RobotListByCategory';
import RobotDetails from '../Screens/RobotsScreen/RobotDetails';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RobotListByCategory" component={RobotListByCategory} />
      <Stack.Screen name="RobotDetails" component={RobotDetails} />
    </Stack.Navigator>
  )
}
