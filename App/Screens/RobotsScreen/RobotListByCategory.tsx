import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Robot, RootStackParamList } from '../../../types'
import { RouteProp } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { robotsStyles } from '../../Styles/robotsStyles'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Styles/Colors'

type CategoryProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RobotListByCategory'>;
  route: RouteProp<RootStackParamList, 'RobotListByCategory'>;
}

export default function RobotListByCategory({ navigation, route }: CategoryProps) {
  const [robots, setRobots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    robotsList();
  }, [])

  const robotsList = () => {
    if (!route.params.category) return null;
    GlobalApi.getRobotByCategory(route.params.category).then((resp) => {
      // console.log("resp", resp);
      setRobots(resp.robots);
      setIsLoading(false);
    }).catch((error) => {
      console.log("API call error!!");
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


  const List = robots.map((robot) => {
    return (
      <TouchableOpacity style={robotsStyles.smallListContainer}
        key={robot["id"]}
        onPress={() => navigation.navigate("RobotDetails", { id: robot["id"] })}>
        <Image source={{ uri: robot["images"][0]["url"] }} style={robotsStyles.smallListImg} />
        <View style={{ width: '50%' }}>
          <Text style={robotsStyles.smallListName}>{robot["name"]}</Text>
          <Text style={robotsStyles.smallListText}>料金(/日)：{robot["cost"]} 円</Text>

          <Text style={robotsStyles.smallListText}>担当：{robot["contactPerson"]}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          {typeColor(robot["category"]["type"], robot)}
        </View>
      </TouchableOpacity>
    )
  })

  const check = robots.length !== 0 ? (
    <View style={{ alignItems: 'center', marginVertical: 10, }}>
      {List}
    </View>
  ) : (<Text style={robotsStyles.smallListNone}>該当のロボット登録がありません。</Text>);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
      </View>
    );
  }


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
        {check}
      </ScrollView>
    </ScrollView>
  )
}
