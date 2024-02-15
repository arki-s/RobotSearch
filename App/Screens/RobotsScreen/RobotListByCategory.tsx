import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { RouteProp } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { robotsStyles } from '../../Styles/robotsStyles'

type CategoryProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RobotListByCategory'>;
  route: RouteProp<RootStackParamList, 'RobotListByCategory'>;
}

export default function RobotListByCategory({ navigation, route }: CategoryProps) {
  return (
    <ScrollView style={robotsStyles.container}>
      <View style={robotsStyles.headerContainer}>
        <FontAwesome5 name="arrow-left" size={24} color="black" />
        <Text>{route.params.category}</Text>
      </View>
      <Text>RobotListByCategory</Text>
    </ScrollView>
  )
}
