import { View, Text, Image } from 'react-native'
import React from 'react'
import { robotsStyles } from '../../Styles/robotsStyles'
import { Robot } from '../../../types'

export default function RobotSmallList({ robot }: { robot: Robot }) {

  function typeColor(type: string) {
    if (type === "人型") {
      return (
        <View style={robotsStyles.smallListTypeH}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    } else if (type === "猫型") {
      return (
        <View style={robotsStyles.smallListTypeC}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    } else if (type === "犬型") {
      return (
        <View style={robotsStyles.smallListTypeD}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    } else if (type === "その他") {
      return (
        <View style={robotsStyles.smallListTypeO}>
          <Text style={robotsStyles.smallListTypeText}>{robot.category.type}</Text>
        </View>
      );
    }
  }

  return (
    <View style={robotsStyles.smallListContainer} key={robot?.id}>
      <Image source={{ uri: robot["images"][0]["url"] }} style={robotsStyles.smallListImg} />
      <View style={{ width: '52%' }}>
        <Text style={robotsStyles.smallListName}>{robot?.name}</Text>
        <Text style={robotsStyles.smallListText}>料金(/日)：{robot?.cost} 円</Text>

        <Text style={robotsStyles.smallListText}>担当：{robot?.contactPerson}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        {typeColor(robot.category.type)}
      </View>
    </View>
  )
}
