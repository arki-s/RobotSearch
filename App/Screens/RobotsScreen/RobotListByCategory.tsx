import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { RouteProp } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { robotsStyles } from '../../Styles/robotsStyles'
import GlobalApi from '../../Utils/GlobalApi'
import RobotSmallList from './RobotSmallList'

type CategoryProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RobotListByCategory'>;
  route: RouteProp<RootStackParamList, 'RobotListByCategory'>;
}

export default function RobotListByCategory({ navigation, route }: CategoryProps) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    robotsList();
  }, [])

  const robotsList = () => {
    if (!route.params.category) return null;
    GlobalApi.getRobotByCategory(route.params.category).then((resp) => {
      // console.log("resp", resp);
      setRobots(resp.robots);
    }).catch((error) => {
      console.log("API call error!!");
      console.log(error.message);
    })
  }

  const List = robots.map((rb) => {
    return (
      <RobotSmallList robot={rb} />
    )
  })


  return (
    <ScrollView style={robotsStyles.container}>
      <View style={robotsStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text style={robotsStyles.headerText}>{route.params.category} ロボット一覧</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{ alignItems: 'center', marginVertical: 10, }}>
          {List}
        </View>
      </ScrollView>
    </ScrollView>
  )
}
