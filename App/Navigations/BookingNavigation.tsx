import { View, Text } from 'react-native'
import React from 'react'
import Booking from '../Screens/BookingScreen/Booking';
import Completed from '../Screens/BookingScreen/Completed';
import Colors from '../Styles/Colors';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Completed" component={Completed} />
    </Stack.Navigator>
  )
}
