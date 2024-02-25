import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';
import { s, vs, ms, mvs } from 'react-native-size-matters';


Dimensions.get('window')
const { width, height, scale } = Dimensions.get('window');
const csheight = height * 0.80;

export const globalStyles = ScaledSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000000",
  },

  primaryText:{
    fontFamily:'kaisei',
  },

  header:{
    backgroundColor:Colors.PRIMARY,
    height:'125@vs',
    width:'100%',
    alignItems:'center',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },

  headerSub:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    gap:20,
    alignItems:'center',
    marginVertical:'12@vs',
  },

  headerSub2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    gap:8,
    alignItems:'center',
    marginBottom:10,
  },

  textInput:{
    backgroundColor:Colors.WHITE,
    padding:5,
    paddingHorizontal:12,
    marginVertical:5,
    width:'280@s',
    borderRadius:10,
    height:'38@vs',
    fontFamily:'kaisei',
  },

  searchIcon:{
    padding:8,
    backgroundColor:Colors.WHITE,
    borderRadius:10,
  },

  headerLogo:{
    width:'45@vs',
    height:'45@vs',
    objectFit:'contain',

  },

  headerText:{
    color:Colors.WHITE,
    fontSize:'28@msr',
    fontFamily:'kaisei',
  },

})
