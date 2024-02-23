import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from "@clerk/clerk-expo";

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
    <View>
      <Text>Completed</Text>
      <TouchableOpacity onPress={HandleBookingPress}>
        <Text>Booking</Text>
      </TouchableOpacity>
    </View>
  )
}
