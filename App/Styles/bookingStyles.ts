import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';
import { s, vs, ms, mvs } from 'react-native-size-matters';

Dimensions.get('window')
const { width, height, scale } = Dimensions.get('window');

export const bookingStyles = ScaledSheet.create({
  container:{
    flex:1,
  },

  header:{
    backgroundColor:Colors.PRIMARY,
    height:'100@vs',
    width:'100%',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },

  titleText:{
    textAlign:'center',
    fontFamily:'kaisei',
    color:Colors.SECONDARY,
    fontSize:26,
  },

  linkContainer:{
    alignItems:'center',
    marginRight:5,
    marginVertical:12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },

  linkContainerL:{
    alignItems:'center',
    marginLeft:5,
    marginVertical:12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
  },

  linkText:{
    fontFamily:'kaisei',
    color:Colors.WHITE,
    fontSize:16,
  }

})
