import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import { homeStyles } from '../../Styles/homeStyles'
import GlobalApi from '../../Utils/GlobalApi';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export default function Categories({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = () => {
    GlobalApi.getCategory().then((resp) => {
      // console.log("resp", resp);
      setCategories(resp?.categories);
    }).catch((error) => {
      console.log("API call error!!");
      console.log(error.message);
    })
  }

  function HandleCategoryPress(categoryName: string) {
    // console.log(categoryName);
    navigation.navigate('RobotListByCategory', { category: categoryName });
  }

  const categoryList = categories.map((ct) => {
    return (
      <TouchableOpacity style={homeStyles.categoryContainer} key={ct["id"]} onPress={() => ct["type"] && HandleCategoryPress(ct["type"])} >
        <Image source={ct["image"] && { uri: ct["image"]["url"] }} style={homeStyles.categoryImg} />
        <Text style={homeStyles.categoryText}>{ct["type"] && ct["type"]}</Text>
      </TouchableOpacity>
    );
  })


  return (
    <View>
      <Heading title={"カテゴリー"} />
      <View style={{ alignItems: 'center' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: 8 }}>
          {categoryList}
        </View>
      </View>
    </View>
  )
}
