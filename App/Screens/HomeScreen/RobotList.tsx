import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi';
import { homeStyles } from '../../Styles/homeStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';

export default function RobotList({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    getRobots()
  }, [])

  const getRobots = () => {
    GlobalApi.getRobot().then((resp) => {
      // console.log("resp", resp);
      setRobots(resp?.robots);
    }).catch((error) => {
      console.log("API call error!!");
      console.log(error.message);
    })
  }

  const robotlist = robots.map((rb) => {
    return (
      <TouchableOpacity style={homeStyles.robotContainer} key={rb["id"]}
        onPress={() => navigation.navigate("RobotDetails", { id: rb["id"] })}>
        <Image source={{ uri: rb["images"][0]["url"] }} style={homeStyles.robotImg} />
        <Text style={homeStyles.robotText}>
          {rb["name"]}
        </Text>
        <Text style={homeStyles.robotCostText}>
          料金(1日につき)：
        </Text>
        <Text style={homeStyles.robotCostText}>
          {rb["cost"]} 円
        </Text>
      </TouchableOpacity>
    );
  })

  return (
    <View>
      <Heading title={"新着"} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {robotlist}
      </ScrollView>
    </View>
  )
}
