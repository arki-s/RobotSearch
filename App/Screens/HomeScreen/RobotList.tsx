import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi';
import { homeStyles } from '../../Styles/homeStyles';

export default function RobotList() {
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

  return (
    <View>
      <Heading title={"新着"} />
      <FlatList
        data={robots}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={homeStyles.robotContainer}>
            <Image source={{ uri: item["images"][0]["url"] }} style={homeStyles.robotImg} />
            <Text style={homeStyles.robotText}>
              {item["name"]}
            </Text>
            <Text style={homeStyles.robotCostText}>
              費用(1日につき)：
            </Text>
            <Text style={homeStyles.robotCostText}>
              {item["cost"]} 円
            </Text>
          </TouchableOpacity>
        )} />
    </View>
  )
}
