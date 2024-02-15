import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { homeStyles } from '../../Styles/homeStyles'
import { FontAwesome } from "@expo/vector-icons";
import Colors from '../../Styles/Colors';
import Slider from './Slider';
import Categories from './Categories';
import RobotList from './RobotList';
import Reviews from './Reviews';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';

export default function Home({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {

  return (
    <View style={{ flex: 1 }}>
      <View style={homeStyles.header}>
        <View style={homeStyles.headerSub}>
          <Image source={require('../../../assets/images/ロボットアイコン.png')} style={homeStyles.headerLogo} />
          <Text style={homeStyles.headerText}>Robot Search</Text>
        </View>
        <View style={homeStyles.headerSub2}>
          <TextInput placeholder='検索' style={homeStyles.textInput} />
          <TouchableOpacity style={homeStyles.searchIcon}>
            <FontAwesome
              name="search"
              size={20}
              color={Colors.PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </View>


      <ScrollView style={homeStyles.container}>
        <Slider />
        <Categories navigation={navigation} />
        <RobotList />
        <Reviews />
      </ScrollView>

    </View>
  )
}
