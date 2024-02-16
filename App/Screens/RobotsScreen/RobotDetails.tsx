import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Robot, RootStackParamList } from '../../../types';
import { RouteProp } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';
import { FontAwesome5 } from '@expo/vector-icons';
import { robotsStyles } from '../../Styles/robotsStyles';

type DetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RobotDetails'>;
  route: RouteProp<RootStackParamList, 'RobotDetails'>;
}

export default function RobotDetails({ navigation, route }: DetailsProps) {
  const [robot, setRobot] = useState();

  useEffect(() => {
    selectedRobot();
  }, [])

  const selectedRobot = () => {
    if (!route.params.id) return null;
    GlobalApi.getRobotById(route.params.id).then((resp) => {
      // console.log("resp", resp);
      setRobot(resp.robot);
    }).catch((error) => {
      console.log("API call error!!")
      console.log(error.message);
    })
  }

  function typeColor(type: string, robot: Robot) {
    if (type === "人型") {
      return (
        <View style={robotsStyles.smallListTypeH}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    } else if (type === "猫型") {
      return (
        <View style={robotsStyles.smallListTypeC}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    } else if (type === "犬型") {
      return (
        <View style={robotsStyles.smallListTypeD}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    } else if (type === "その他") {
      return (
        <View style={robotsStyles.smallListTypeO}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    }
  }

  return robot && (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={robotsStyles.detailsArrow}>
        <FontAwesome5 name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <View style={robotsStyles.detailsContainer}>
          <Image source={{ uri: robot["images"][0]["url"] }} style={robotsStyles.detailsImg} />

          <View style={robotsStyles.detailsSubContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={robotsStyles.detailsTextName}>{robot["name"]}</Text><Text>⭐️</Text><Text>{typeColor(robot["category"]["type"], robot)}</Text>
            </View>
            <View style={{ marginVertical: 10, marginHorizontal: '5%', width: '90%' }}>
              <Text style={robotsStyles.detailsTextA}>料金（1日につき）：{robot["cost"]} 円</Text>
              <Text style={robotsStyles.detailsTextA}>連絡先：{robot["contactPerson"]}</Text>
              <Text style={robotsStyles.detailsTextA}>メールアドレス：{robot["email"]}</Text>
            </View>
            <Text style={robotsStyles.smallListTypeText}>{robot["about"]}</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}
