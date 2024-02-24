import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from "@clerk/clerk-expo";
import { bookingStyles } from '../../Styles/bookingStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Styles/Colors'

export default function Booking({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getNotCompletedBooking();
  }, [])

  const getNotCompletedBooking = () => {
    if (user?.primaryEmailAddress?.emailAddress === undefined) return;

    GlobalApi.getNotCompletedBooking(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      // console.log("resp", resp["bookings"]);
      setBookings(resp["bookings"]);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  function HandleCompletedPress() {
    navigation.navigate('Completed');
  }

  const bookingList = bookings.map((bk) => {
    return (
      <View key={bk["id"]} style={bookingStyles.listContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
          <Image source={{ uri: bk["robot"]["images"][0]["url"] }} style={bookingStyles.listImg} />
          <View>
            <Text style={bookingStyles.nameText}>{bk["robot"]["name"]}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5, }}>
              <Text style={bookingStyles.contactText}>{bk["robot"]["contactPerson"]}:</Text>
              <Text style={bookingStyles.contactText}>{bk["robot"]["email"]}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 5, }}>
          <Text style={bookingStyles.text}>レンタル開始日：{(bk["startDate"] as string).substring(0, 16)}</Text>
          <Text style={bookingStyles.text}>レンタル日数　：{bk["days"]} 日</Text>
          <Text style={bookingStyles.text}>料金　　　　　：{(bk["totalFee"] as number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 円</Text>
          <Text style={bookingStyles.text}>コメント：{bk["comment"]}</Text>
        </View>
        <TouchableOpacity style={bookingStyles.cancelBtn}>
          <Text style={bookingStyles.cancelText}>キャンセル</Text>
        </TouchableOpacity>

      </View>
    );
  })

  const check = bookings.length > 0 ? (
    bookingList
  ) : (
    <View>
      <Text style={bookingStyles.noBookingsText}>予約がありません。</Text>
    </View>
  );

  return (
    <View style={bookingStyles.container}>
      <View style={bookingStyles.header}>
        <TouchableOpacity style={bookingStyles.linkContainer} onPress={HandleCompletedPress}>
          <Text style={bookingStyles.linkText}>完了済み予約一覧</Text>
          <FontAwesome5 name="arrow-right" size={18} color={Colors.WHITE} />
        </TouchableOpacity>
        <Text style={bookingStyles.titleText}>予約一覧</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          {check}
        </View>
      </ScrollView>
    </View>
  )
}
