import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { homeStyles } from '../../Styles/homeStyles'

export default function Home() {
  console.log("this is home page")
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>

      </View>

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
  )
}
