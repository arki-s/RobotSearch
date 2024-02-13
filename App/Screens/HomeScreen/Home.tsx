import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeStyles } from '../../Styles/homeStyles'
import { FontAwesome } from "@expo/vector-icons";
import Colors from '../../Styles/Colors';

export default function Home() {

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <View style={homeStyles.headerSub}>
          <Image source={require('../../../assets/images/ロボットアイコン.png')} style={homeStyles.headerLogo} />
          <Text style={homeStyles.headerText}>Robot Search</Text>
        </View>
        <View style={homeStyles.headerSub2}>
          <TextInput placeholder='search' style={homeStyles.textInput} />
          <TouchableOpacity>
            <FontAwesome
              name="search"
              size={24}
              color={Colors.PRIMARY}
              style={homeStyles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={homeStyles.contentsContainer}>
        <View>
          <Text>広告エリア</Text>
        </View>

        <View>
          <Text>
            カテゴリエリア
          </Text>
        </View>

        <View>
          <Text>新着エリア</Text>
        </View>
      </View>

    </View>
  )
}
