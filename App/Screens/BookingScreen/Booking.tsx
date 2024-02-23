import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'

export default function Booking({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {

  function HandleCompletedPress() {
    navigation.navigate('Completed');
  }

  return (
    <View style={{ padding: 100 }}>
      <TouchableOpacity onPress={HandleCompletedPress}>
        <Text>Completed</Text>
      </TouchableOpacity>
      <Text>Booking</Text>
    </View>
  )
}
