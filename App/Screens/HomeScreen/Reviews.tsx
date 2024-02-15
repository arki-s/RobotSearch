import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import { homeStyles } from '../../Styles/homeStyles';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, [])

  const getReviews = () => {
    GlobalApi.getReview().then((resp) => {
      // console.log("resp", resp);
      setReviews(resp?.reviews);
    }).catch((error) => {
      console.log("API call error!!");
      console.log(error.message);
    })
  }

  return (
    <View>
      <Heading title={"新着レビュー"} />
      <FlatList
        data={reviews}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={homeStyles.reviewContainer}>
            <Text style={homeStyles.reviewTextName}>{item["robot"]["name"]}</Text>
            <Text style={homeStyles.reviewText}>{("⭐️").repeat(item["rating"])}</Text>
            <Text style={homeStyles.reviewText}>{item["name"]}</Text>
            <Text numberOfLines={3} style={homeStyles.reviewText}>{item["comment"]}</Text>


          </TouchableOpacity>
        )}
      />
    </View>
  )
}
