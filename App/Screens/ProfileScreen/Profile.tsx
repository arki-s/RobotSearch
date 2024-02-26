import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { profileStyles } from '../../Styles/profileStyles'
import { SignedOut, useUser } from "@clerk/clerk-expo";

export default function Profile({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const { user } = useUser();

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.header}>
        <Text style={profileStyles.titleText}>ユーザー情報</Text>
      </View>
      <View>
        <View style={profileStyles.dataContainer}>
          <Text style={profileStyles.dataText}>アカウント名：{user?.primaryEmailAddress?.emailAddress}</Text>
          <Text style={profileStyles.dataText}>これまでの予約数：</Text>
          <Text style={profileStyles.dataText}>レビュー数：</Text>
          <TouchableOpacity onPress={() => SignedOut} style={profileStyles.logoutBtn}>
            <Text style={profileStyles.btnText}>ログアウト</Text>
          </TouchableOpacity>
        </View>



      </View>

    </View>
  )
}
