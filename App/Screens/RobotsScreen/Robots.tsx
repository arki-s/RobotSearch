import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { globalStyles } from '../../Styles/globalStyles';
import { FontAwesome } from "@expo/vector-icons";
import Colors from '../../Styles/Colors';
import { robotsStyles } from '../../Styles/robotsStyles';

export default function Robots({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {

  return (
    <View style={{ flex: 1 }}>
      <View style={globalStyles.header}>
        <View style={globalStyles.headerSub}>
          <Text style={robotsStyles.headerTextR}>ロボット一覧</Text>
        </View>
        <View style={globalStyles.headerSub2}>
          <TextInput placeholder='検索' style={globalStyles.textInput} />
          <TouchableOpacity style={globalStyles.searchIcon}>
            <FontAwesome
              name="search"
              size={20}
              color={Colors.PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
