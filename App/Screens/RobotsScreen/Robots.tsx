import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Robot, RootStackParamList } from '../../../types'
import { globalStyles } from '../../Styles/globalStyles';
import { FontAwesome } from "@expo/vector-icons";
import Colors from '../../Styles/Colors';
import { robotsStyles } from '../../Styles/robotsStyles';
import GlobalApi from '../../Utils/GlobalApi';
import { RouteProp } from '@react-navigation/native';

type RobotsProts = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Robots'>;
  route: RouteProp<RootStackParamList, 'Robots'>;
}

export default function Robots({ navigation, route }: RobotsProts) {
  const [isLoading, setIsLoading] = useState(false);
  const [robots, setRobots] = useState([]);
  const [allRobots, setAllRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
  }, [])

  const HandleSearch = (word: string) => {
    setSearch(word);
  }

  if (route.params == undefined || route.params.searchWord === undefined || route.params.searchWord === "" || route.params.searchWord === null) {
    console.log("全部");
    console.log(typeof route.params.searchWord);

    useEffect(() => {
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
  } else {
    useEffect(() => {
      getSearchedRobots();
    }, [])

    const getSearchedRobots = () => {
      console.log("一部");
      console.log(route.params.searchWord);
      if (route.params.searchWord === undefined) return null;
      GlobalApi.getSearchedRobots(route.params.searchWord).then((resp) => {
        console.log("resp", resp);
        setRobots(resp.robots);
        setIsLoading(false);
      }).catch((error) => {
        console.log("API call error!!");
        console.log(error.message);
      })
    }

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

  function HandleSearchPress() {
    navigation.navigate("Robots", { searchWord: search });
  }

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
          {/* <TouchableOpacity style={globalStyles.searchIcon} onPress={HandleSearchPress}>
            <FontAwesome
              name="search"
              size={20}
              color={Colors.PRIMARY}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      <ScrollView>
        {check}
      </ScrollView>
    </View>
  )
}
