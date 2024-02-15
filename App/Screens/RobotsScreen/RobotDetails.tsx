import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
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

  return robot && (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 10 }} style={robotsStyles.detailsArrow}>
        <FontAwesome5 name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <View style={robotsStyles.detailsContainer}>


          <Image source={{ uri: robot["images"][0]["url"] }} style={robotsStyles.detailsImg} />
          <Text>{robot["name"]}</Text>
          <Text>{robot["cost"]} 円</Text>
          <Text>{robot["contactPerson"]}</Text>
          <Text>{robot["email"]}</Text>
          <Text>{robot["about"]}</Text>
        </View>
      </ScrollView>
    </View>
  )
}
