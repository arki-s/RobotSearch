import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from "@clerk/clerk-expo";
import { bookingStyles } from '../../Styles/bookingStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Styles/Colors'

export default function Booking({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const { user } = useUser();

  useEffect(() => {
    getNotCompletedBooking();
  }, [])

  const getNotCompletedBooking = () => {
    if (user?.primaryEmailAddress?.emailAddress === undefined) return;

    GlobalApi.getNotCompletedBooking(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      console.log("resp", resp);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  function HandleCompletedPress() {
    navigation.navigate('Completed');
  }



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
        <Text>Booking</Text>

      </ScrollView>
    </View>
  )
}
