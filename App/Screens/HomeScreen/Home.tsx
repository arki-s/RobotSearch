import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { homeStyles } from '../../Styles/homeStyles'

export default function Home() {

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Image source={require('../../../assets/images/ロボットアイコン.png')} style={homeStyles.headerLogo} />
        <Text style={homeStyles.headerText}>Robot Search</Text>
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
