import { View, Text, TouchableOpacity, ScrollView, Image, Modal, Touchable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from "@clerk/clerk-expo";
import { bookingStyles } from '../../Styles/bookingStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Styles/Colors'
import { globalStyles } from '../../Styles/globalStyles'
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useToast } from "react-native-toast-notifications";


export default function Completed({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);
  const [reviewModal, setReviewModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    { label: '⭐️', value: 1 },
    { label: '⭐️⭐️', value: 2 },
    { label: '⭐️⭐️⭐️', value: 3 },
    { label: '⭐️⭐️⭐️⭐️', value: 4 },
    { label: '⭐️⭐️⭐️⭐️⭐️', value: 5 }
  ]);
  const [name, setName] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const [robot, setRobot] = useState<string | null>(null);
  const toast = useToast();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getCompletedBooking();
    getReviewsForCheck();
  }, [])

  const getCompletedBooking = () => {
    if (user?.primaryEmailAddress?.emailAddress === undefined) return;

    GlobalApi.getCompletedBooking(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      // console.log("resp", resp["bookings"]);
      setBookings(resp["bookings"]);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  const getReviewsForCheck = () => {
    if (user?.primaryEmailAddress?.emailAddress === undefined) return;

    GlobalApi.getReviewsDone(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      console.log("resp", resp);
      setReviews(resp.reviews);
    }).catch((error) => {
      console.log("API call error!!");
      console.log(error.message);
    })

  }

  function HandleBookingPress() {
    navigation.navigate('Booking');
  }


  let reviewed: boolean = false;

  const bookingList = bookings.map((bk) => {
    if (reviews.length > 0) {
      reviews.map((rv) => {
        if (rv["booking"]["id"] === bk["id"]) {
          reviewed = true;
        } else {
          reviewed = false;
        }
      })
    }
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
        {reviewed ? (
          <View style={{ opacity: 0.5 }}>
            <View style={bookingStyles.cancelBtn} >
              <Text style={bookingStyles.cancelText}>レビュー済み</Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity style={bookingStyles.cancelBtn} onPress={() => { setRobot(bk["robot"]["id"]); setReviewModal(true); }}>
            <Text style={bookingStyles.cancelText}>レビューする</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  })

  const check = bookings.length > 0 ? (
    bookingList
  ) : (
    <View>
      <Text style={bookingStyles.noBookingsText}>完了済みの予約がありません。</Text>
    </View>
  );

  const completeCheck = (name != null && comment != null && value != null) ? (
    <TouchableOpacity style={bookingStyles.reviewBtn} onPress={() => createReview()}>
      <Text style={bookingStyles.reviewBtnText}>レビューを投稿する</Text>
    </TouchableOpacity>
  ) : (
    <View style={{ opacity: 0.5 }}>
      <View style={bookingStyles.reviewBtn} >
        <Text style={bookingStyles.reviewBtnText}>レビューを投稿する</Text>
      </View>
    </View>
  );

  const review = reviewModal && (
    <Modal animationType='slide' transparent={true}>
      <View style={bookingStyles.modalContainer}>
        <View style={bookingStyles.modalReviewContainer}>
          <Text style={bookingStyles.reviewTitle}>レビュー追加</Text>
          <TouchableOpacity onPress={() => setReviewModal(false)} style={bookingStyles.closeReviewModal}>
            <AntDesign name="closesquareo" size={30} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <TextInput placeholder='ニックネーム' onChangeText={(name) => setName(name)} value={name} style={bookingStyles.reviewNMInput} />
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
          <TextInput placeholder='レビューコメント' multiline={true} numberOfLines={5}
            onChangeText={(comment) => setComment(comment)} value={comment} style={bookingStyles.reviewCInput} />
          {completeCheck}
        </View>
      </View>
    </Modal>
  );

  const createReview = () => {
    if (!name || !value || !comment || !robot || !user?.primaryEmailAddress) return null;
    const date = new Date;
    const robotId = robot;

    GlobalApi.createReview(name, date.toDateString(), value, comment, user.primaryEmailAddress.emailAddress, robotId).then((resp) => {
      console.log("resp", resp);

      toast.show("新しいレビューを投稿しました！", {
        type: "success",
        placement: "bottom",
        duration: 5000,
        offset: 30,
        animationType: "zoom-in",
      });

      setComment(null);
      setName(null);
      setRobot(null);
      setReviewModal(false);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }


  return (
    <View style={bookingStyles.container}>
      <View style={bookingStyles.header}>
        <TouchableOpacity style={bookingStyles.linkContainerL} onPress={HandleBookingPress}>
          <FontAwesome5 name="arrow-left" size={18} color={Colors.WHITE} />
          <Text style={bookingStyles.linkText}>予約一覧</Text>
        </TouchableOpacity>
        <Text style={bookingStyles.titleText}>完了済み予約一覧</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          {check}
        </View>
      </ScrollView>
      {review}
    </View>
  )
}
