import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Robot, RootStackParamList } from '../../../types'
import { globalStyles } from '../../Styles/globalStyles';
import Colors from '../../Styles/Colors';
import { robotsStyles } from '../../Styles/robotsStyles';
import GlobalApi from '../../Utils/GlobalApi';
import filter from 'lodash.filter';

export default function Robots({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const [isLoading, setIsLoading] = useState(false);
  const [robots, setRobots] = useState([]);
  const [allRobots, setAllRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAllRobots();
  }, [])

  const getAllRobots = () => {
    GlobalApi.getAllRobots().then((resp) => {
      // console.log("resp", resp);
      setRobots(resp.robots);
      setIsLoading(false);
    }).catch((error) => {
      console.log("API call error!!");
      console.log(error.message);
    })
  }

  const HandleSearch = (word: string) => {
    setSearch(word);
    const formattedQuery = word.toLowerCase();
    const filteredData = filter(allRobots, (robot) => {
      return contains(robot, formattedQuery);
    });
    setRobots(filteredData);
  }

  const contains = ({ name }: { name: string }, word: string) => {
    if (name.includes(word)) return true;

    return false;
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
      </View>
    );
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
  ) : (<Text style={robotsStyles.smallListNone}>ロボットの登録がありません。</Text>);

  return (
    <View style={{ flex: 1 }}>
      <View style={globalStyles.header}>
        <View style={globalStyles.headerSub}>
          <Text style={robotsStyles.headerTextR}>ロボット一覧</Text>
        </View>
        <View style={globalStyles.headerSub2}>
          <TextInput placeholder='ロボット名検索' onChangeText={(word) => HandleSearch(word)}
            value={search} autoCapitalize='none' clearButtonMode='always'
            autoCorrect={false}
            style={globalStyles.textInput} />
        </View>
      </View>
      <ScrollView>
        {check}
      </ScrollView>
    </View>
  )
}
