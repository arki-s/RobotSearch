import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import { homeStyles } from '../../Styles/homeStyles'
import GlobalApi from '../../Utils/GlobalApi';

export default function Categories() {
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

  const categoryList = categories.map((ct) => {
    return (
      <TouchableOpacity style={homeStyles.categoryContainer} key={ct["id"]}>
        <Image source={ct["image"] && { uri: ct["image"]["url"] }} style={homeStyles.categoryImg} />
        <Text style={homeStyles.categoryText}>{ct["type"] && ct["type"]}</Text>
      </TouchableOpacity>
    );
  })


  return (
    <View>
      <Heading title={"カテゴリー"} />
      <View style={{ alignItems: 'center' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryList}
        </ScrollView>
      </View>
    </View>
  )
}
