import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'

export default function Completed({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  return (
    <View>
      <Text>Completed</Text>
    </View>
  )
}
