import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';
import { s, vs, ms, mvs } from 'react-native-size-matters';


Dimensions.get('window')
const { width, height, scale } = Dimensions.get('window');
const csheight = height * 0.80;

export const homeStyles = ScaledSheet.create({
  container:{
    padding:'5@msr',
    flexGrow:1,
    // display:'flex',
    // flexDirection:'column',
    // justifyContent:'space-around',
    // backgroundColor:'#000000',
    // height:csheight,
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

  primaryText:{
    fontFamily:'kaisei',
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

  slider: {
    marginVertical: "10@vs",
    marginRight: 10,
  },

  sliderImage: {
    width: '270@s',
    height: '150@vs',
    borderRadius: 10,
    objectFit: 'cover',
  },

  categoryContainer:{
    marginTop:'10@vs',
    alignItems:'center',
    backgroundColor:Colors.WHITE,
    borderRadius:99,
    height:'80@vs',
    width:'80@s',
    padding:5,
    marginBottom:'5@vs',
  },

  categoryImg:{
    height:'45@vs',
    width:'45@s',
    objectFit:'contain',
  },

  categoryText:{
    fontFamily:'kaisei',
  },

  robotContainer:{
    marginVertical:'10@vs',
    backgroundColor:Colors.WHITE,
    padding:8,
    marginRight:8,
    borderRadius:10,
    alignItems:'center',
    width:'180@s',
  },

  robotImg:{
    height:'120@vs',
    width:'150@s',
    objectFit:'cover',
    borderRadius:10,
  },

  robotText:{
    fontFamily:'kaisei',
    fontSize:16,
    marginVertical:8,
    color:Colors.BLACK,
  },

  robotCostText:{
    fontFamily:'kaisei',
    fontSize:14,
    color:Colors.PRIMARY,
  },

  reviewContainer:{
    padding:10,
    marginVertical:'10@vs',
    backgroundColor:Colors.WHITE,
    borderRadius:10,
    width:'170@s',
    marginRight:'10@s',
  },

  reviewTextName:{
    fontFamily:'kaisei',
    fontSize:'20@msr',
    marginBottom:'5@vs',

  },

  reviewText:{
    fontFamily:'kaisei',
    fontSize:'16@msr',

  },



})
