import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from "@clerk/clerk-expo";

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
    <View style={{ padding: 100 }}>
      <TouchableOpacity onPress={HandleCompletedPress}>
        <Text>Completed</Text>
      </TouchableOpacity>
      <Text>Booking</Text>
    </View>
  )
}
