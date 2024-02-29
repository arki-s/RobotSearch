import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
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

  const reviewList = reviews.map((rv) => {
    return (
      <TouchableOpacity style={homeStyles.reviewContainer} key={rv["id"]}>
        <Text style={homeStyles.reviewTextName}>{rv["booking"]["robot"]["name"]}</Text>
        <Text style={homeStyles.reviewText}>{("⭐️").repeat(rv["rating"])}</Text>
        <Text style={homeStyles.reviewText}>{rv["name"]}</Text>
        <Text numberOfLines={3} style={homeStyles.reviewText}>{rv["comment"]}</Text>
      </TouchableOpacity>
    );
  })


  return (
    <View>
      <Heading title={"新着レビュー"} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {reviewList}
      </ScrollView>
    </View>
  )
}
