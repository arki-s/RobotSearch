import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
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
      console.log("resp", resp?.sliders);
      setSlider(resp?.sliders)
    }).catch((error) => {
      console.log("API call error!");
      console.log(error.message);
    })
  }

  return (
    <View>
      <Heading title={"お知らせ"} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={homeStyles.slider}>
            <Image source={{ uri: item?.image?.url }} style={homeStyles.sliderImage} />
          </View>
        )} />

    </View>
  )
}
