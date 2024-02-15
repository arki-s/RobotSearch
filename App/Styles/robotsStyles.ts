import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';
import { s, vs, ms, mvs } from 'react-native-size-matters';


Dimensions.get('window')
const { width, height, scale } = Dimensions.get('window');

export const robotsStyles = ScaledSheet.create({
  container:{
    flex:1,
  },

  headerContainer:{
    display:'flex',
    flexDirection:'row',

  },
})
