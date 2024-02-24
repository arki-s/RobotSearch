import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from "@clerk/clerk-expo";
import { bookingStyles } from '../../Styles/bookingStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Styles/Colors'


export default function Completed({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const { user } = useUser();

  useEffect(() => {
    getCompletedBooking();
  }, [])

  const getCompletedBooking = () => {
    if (user?.primaryEmailAddress?.emailAddress === undefined) return;

    GlobalApi.getCompletedBooking(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      console.log("resp", resp);
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  function HandleBookingPress() {
    navigation.navigate('Booking');
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
        <Text>Completed</Text>

      </ScrollView>

    </View>
  )
}
