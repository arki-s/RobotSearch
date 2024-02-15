import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { homeStyles } from '../../Styles/homeStyles';
import Heading from '../../Components/Heading';

export default function Slider() {

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      // console.log("resp", resp?.sliders);
      setSlider(resp?.sliders)
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  const sliders = slider.map((sd) => {
    return (
      <View style={homeStyles.slider} key={sd["id"]}>
        <Image source={sd['image'] && { uri: sd['image']['url'] }} style={homeStyles.sliderImage} />
      </View>
    );
  })

  return (
    <View>
      <Heading title={"お知らせ"} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {sliders}
      </ScrollView>

    </View>
  )
}
