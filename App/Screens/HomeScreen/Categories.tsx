import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
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


  return (
    // <View style={{ marginTop: -430 }}>
    <View>
      <Heading title={"カテゴリー"} />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={categories}
          numColumns={4}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={homeStyles.categoryContainer}>
              <Image source={item["image"] && { uri: item["image"]["url"] }} style={homeStyles.categoryImg} />
              <Text style={homeStyles.categoryText}>{item["type"] && item["type"]}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}
