import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { profileStyles } from '../../Styles/profileStyles'
import { useAuth, useUser } from "@clerk/clerk-expo";
import GlobalApi from '../../Utils/GlobalApi'

export default function Profile({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();
  const [myReviews, setMyReviews] = useState([]);
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    getReviews();
    getMyBookings();
  }, [])

  const getReviews = () => {
    if (!user || user.primaryEmailAddress == undefined) return null;
    GlobalApi.getReviewsDone(user.primaryEmailAddress.emailAddress).then((resp) => {
      // console.log("resp", resp.reviews);
      setMyReviews(resp.reviews);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  const getMyBookings = () => {
    if (!user || user.primaryEmailAddress == undefined) return null;
    GlobalApi.getMyBookings(user.primaryEmailAddress.emailAddress).then((resp) => {
      // console.log("resp", resp.bookings);
      setMyBookings(resp.bookings);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }


  const SignOut = () => {
    if (!isLoaded) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => signOut()} style={profileStyles.logoutBtn}>
        <Text style={profileStyles.btnText}>ログアウト</Text>
      </TouchableOpacity>
    );
  };



  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.header}>
        <Text style={profileStyles.titleText}>ユーザー情報</Text>
      </View>
      <View>
        <View style={profileStyles.dataContainer}>
          <Text style={profileStyles.dataText}>アカウント名：{user?.primaryEmailAddress?.emailAddress}</Text>
          <Text style={profileStyles.dataText}>これまでの予約数：{myBookings.length}</Text>
          <Text style={profileStyles.dataText}>レビュー数：{myReviews.length}</Text>
          {SignOut()}
        </View>



      </View>

    </View>
  )
}
