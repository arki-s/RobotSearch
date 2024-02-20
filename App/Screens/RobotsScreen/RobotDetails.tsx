import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Robot, RootStackParamList } from '../../../types';
import { RouteProp } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';
import { FontAwesome5 } from '@expo/vector-icons';
import { robotsStyles } from '../../Styles/robotsStyles';
import Colors from '../../Styles/Colors';
import { AntDesign } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";

type DetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RobotDetails'>;
  route: RouteProp<RootStackParamList, 'RobotDetails'>;
}

export default function RobotDetails({ navigation, route }: DetailsProps) {
  const [robot, setRobot] = useState();
  const [readMore, setReadMore] = useState(false);
  const [reviews, setReviews] = useState();
  const [bookingModal, setBookingModal] = useState(false);

  useEffect(() => {
    selectedRobot();
    robotsReview();
  }, [])

  const selectedRobot = () => {
    if (!route.params.id) return null;
    GlobalApi.getRobotById(route.params.id).then((resp) => {
      console.log("resp", resp);
      setRobot(resp.robot);
    }).catch((error) => {
      console.log("API call error!!")
      console.log(error.message);
    })
  }

  const robotsReview = () => {
    if (!route.params.id) return null;
    GlobalApi.getReviewByRobot(route.params.id).then((resp) => {
      console.log("resp", resp.reviews);
      setReviews(resp.reviews);
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



  const booking = () => {
    if (bookingModal) return (
      <Modal animationType='slide'>
        <View>
          <View>
            <Text style={robotsStyles.bookingTitle}>予約</Text>
            <TouchableOpacity onPress={() => setBookingModal(false)} style={robotsStyles.closeModal}>
              <AntDesign name="closesquareo" size={30} color={Colors.PRIMARY} />
            </TouchableOpacity>
          </View>
          <View style={robotsStyles.calendarContainer}>
            <CalendarPicker
              onDateChange={this.onDateChange}
              allowRangeSelection={true}
              width={330}
              minDate={Date.now()}
              todayBackgroundColor={Colors.PRIMARY}
              todayTextStyle={{ color: Colors.WHITE }}
              selectedDayColor={Colors.PRIMARY}
              selectedDayTextColor={Colors.WHITE}
            />
          </View>
        </View>
      </Modal>
    );
  }


  return robot && (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={robotsStyles.detailsArrow}>
        <FontAwesome5 name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: '92.5%' }}>
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
            <Text style={robotsStyles.smallListTypeText} numberOfLines={readMore ? 20 : 6}>{robot["about"]}</Text>
            <TouchableOpacity onPress={() => setReadMore(!readMore)}><Text style={{ fontFamily: 'kaisei', color: Colors.PRIMARY }}>{readMore ? "閉じる" : "さらに表示"}</Text></TouchableOpacity>
          </View>

          <View style={robotsStyles.detailsPhotoContainer}>
            <Text style={robotsStyles.sectionText}>⭐️ 写真 ⭐️</Text>
            <FlatList
              data={robot["images"]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Image source={{ uri: item.url }} style={robotsStyles.detailsImgs} />
              )}
            />
          </View>

          <View style={robotsStyles.detailsSubContainer}>
            <Text style={robotsStyles.sectionText}>⭐️ レビュー ⭐️</Text>
            {reviews ? (
              <FlatList
                data={reviews}
                scrollEnabled={false}
                renderItem={({ item, index }) => (
                  <View style={robotsStyles.reviewContainer}>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, marginBottom: 3 }}>
                      <Text style={{ fontSize: 20, width: 130, }}>{("⭐️").repeat(item.rating)}</Text>
                      <Text style={{ fontFamily: 'kaisei', fontSize: 18, color: Colors.PRIMARY }}>by {item.name}</Text>
                    </View>
                    <Text style={robotsStyles.smallListTypeText}>{item.comment}</Text>
                  </View>
                )}
              />

            ) : <Text style={robotsStyles.noReviewText}>レビューはありません。</Text>}

          </View>

        </View>

      </ScrollView>
      <View>
        <TouchableOpacity style={robotsStyles.bookingBtn} onPress={() => setBookingModal(true)}>
          <Text style={robotsStyles.bookingText}>予約する</Text>
        </TouchableOpacity>
      </View>
      {booking()}
    </View>
  )
}
