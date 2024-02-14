import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({ title }: { title: string }) {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginLeft: 15,
  },

  headingText: {
    fontFamily: 'kaisei',
    fontSize: 22,
  }
})
