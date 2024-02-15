import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';

export default function Heading({ title }: { title: string }) {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  heading: {
    marginVertical: '5@vs',
    marginLeft: '15@s',
  },

  headingText: {
    fontFamily: 'kaisei',
    fontSize: '25@msr',
  }
})
