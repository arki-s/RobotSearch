import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Modal, ToastAndroid } from 'react-native'
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
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import { useUser } from "@clerk/clerk-expo";
import toast from 'react-native-toast-notifications/lib/typescript/toast';
import { useToast } from "react-native-toast-notifications";

type DetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RobotDetails'>;
  route: RouteProp<RootStackParamList, 'RobotDetails'>;
}

export default function RobotDetails({ navigation, route }: DetailsProps) {
  const [robot, setRobot] = useState();
  const [readMore, setReadMore] = useState(false);
  const [reviews, setReviews] = useState();
  const { user } = useUser();
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    { label: '1日', value: '1' },
    { label: '2日', value: '2' },
    { label: '3日', value: '3' },
    { label: '4日', value: '4' },
    { label: '5日', value: '5' },
    { label: '6日', value: '6' },
    { label: '7日', value: '7' }
  ]);
  const [note, setNote] = useState<string>("");
  let total: number = 0;
  const toast = useToast();

  useEffect(() => {
    selectedRobot();
    robotsReview();
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

  const robotsReview = () => {
    if (!route.params.id) return null;
    GlobalApi.getReviewByRobot(route.params.id).then((resp) => {
      // console.log("resp", resp.reviews);
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

  const createNewBooking = () => {
    if (!user || !robot || !selectedDate) return null;
    if (user?.primaryEmailAddress?.emailAddress == undefined || route.params.id == undefined) return null;

    const userEmail = user?.primaryEmailAddress?.emailAddress;
    const date = selectedDate;
    const days = value;
    const fee = total;
    const comment = note;
    const id = route.params.id;

    GlobalApi.createBooking(userEmail, date, days, fee, comment, id).then((resp) => {
      console.log("resp", resp);
      console.log("予約成功！");

      toast.show("予約が完了しました！", {
        type: "success",
        placement: "bottom",
        duration: 5000,
        offset: 30,
        animationType: "zoom-in",
      });

      setBookingModal(false);
    }).catch((error) => {
      console.log("予約失敗・・・");
      console.log(error.message);
      setBookingModal(false);
    });

  }

  const booking = () => {
    const minDate = Date.now();
    const totalcheck = robot && Number((robot["cost"] as String).replace(/,/g, "")) * value;
    total = totalcheck != undefined ? totalcheck : 0;
    // console.log(user?.primaryEmailAddress?.emailAddress);

    function bookingBtn() {
      if (selectedDate && value != 0) {
        return (
          <TouchableOpacity style={robotsStyles.bookingBtn} onPress={() => createNewBooking()}>
            <Text style={robotsStyles.bookingText}>予約を確定する</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <View style={{ opacity: 0.5 }}>
            <View style={robotsStyles.bookingBtn}>
              <Text style={robotsStyles.bookingText}>予約を確定する</Text>
            </View>
          </View>
        )
      }
    }

    if (bookingModal) return (
      <Modal animationType='slide'>
        <View>
          <View>
            <Text style={robotsStyles.bookingTitle}>予約</Text>
            <TouchableOpacity onPress={() => setBookingModal(false)} style={robotsStyles.closeModal}>
              <AntDesign name="closesquareo" size={30} color={Colors.PRIMARY} />
            </TouchableOpacity>
          </View>
          <Text style={robotsStyles.bookingModalText}>明日以降の日付を選択してください</Text>
          <View style={robotsStyles.calendarContainer}>
            <CalendarPicker
              onDateChange={(date: Date) => {
                if (date.getTime() < minDate) {
                  return;
                }
                setSelectedDate(date);
              }}
              // allowRangeSelection={true}
              width={330}
              minDate={minDate}
              maxDate={new Date(2100, 12, 31)}
              // todayBackgroundColor={Colors.PRIMARY}
              // todayTextStyle={{ color: Colors.WHITE }}
              selectedDayColor={Colors.PRIMARY}
              selectedDayTextColor={Colors.WHITE}
            />
          </View>
          <Text style={robotsStyles.bookingModalText}>レンタル期間を選択してください</Text>
          <View style={{ alignItems: 'center', marginVertical: 10, zIndex: 1 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{ backgroundColor: Colors.WHITE, }}
              containerStyle={{
                width: 150,
              }}
              textStyle={{
                fontFamily: 'kaisei',
              }}
              zIndex={1000}
            />
          </View>
          <Text style={robotsStyles.bookingModalText}>何か要望があれば入力してください</Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput placeholder='ペットロボットの場合は名前や性格など' style={robotsStyles.bookingInput}
              multiline={true} onChangeText={(note) => setNote(note)} value={note}
              numberOfLines={2} />
          </View>

          <View style={robotsStyles.resultContainer}>
            <View style={{ width: "80%" }}>
              <Text style={robotsStyles.bookingModalTextResult}>
                レンタル開始日：{selectedDate ? selectedDate?.toString().substring(0, 16) : "選択してください"}
              </Text>
              <Text style={robotsStyles.bookingModalTextResult}>
                レンタル期間　：{value == 0 ? "選択してください" : value + "日"}
              </Text>
              <Text style={robotsStyles.bookingModalTextResult}>レンタル料　　：{total != undefined && (total as number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 円</Text>
            </View>

          </View>

          {bookingBtn()}

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
