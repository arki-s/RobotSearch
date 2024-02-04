import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Robots from '../Screens/Robots';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Robots" component={Robots} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
