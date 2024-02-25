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
  },

  listContainer:{
    padding:10,
    borderRadius:10,
    backgroundColor:Colors.WHITE,
    width:'90%',
    marginBottom:10,
  },

  listImg:{
    height:'70@vs',
    width:'70@s',
    objectFit:'cover',
    borderRadius:10,
  },

  cancelBtn:{
    marginTop:5,
    width:'100@s',
    paddingVertical:3,
    paddingHorizontal:8,
    borderRadius:5,
    backgroundColor:Colors.PRIMARY_LIGHT,
    alignSelf:'flex-end',
  },

  cancelText:{
    fontFamily:'kaisei',
    color:Colors.WHITE,
    textAlign:'center',
  },

  nameText:{
    fontFamily:'kaisei',
    fontSize:22,
    color:Colors.PRIMARY,
  },

  text:{
    fontFamily:'kaisei',
  },

  contactText:{
    fontFamily:'kaisei',
    color:Colors.GRAY,
    marginTop:'5@vs',
  },

  noBookingsText:{
    marginTop:'100@vs',
    textAlign:'center',
    fontFamily:'kaisei',
    fontSize:24,
  },

  modalContainer:{
    alignItems:'center',
    marginTop:'300@vs',
  },

  modalSubContainer:{
    borderRadius:10,
    borderWidth:3,
    borderColor:Colors.SECONDARY,
    backgroundColor:Colors.WHITE,
    width:'300@s',
    height:'150@vs',
    padding:'20@msr',
  },

  modalText:{
    fontFamily:'kaisei',
    fontSize:16,
    textAlign:'center',
    marginBottom:'30@vs',
  },

  modalYes:{
    alignItems:'center',
    borderRadius:99,
    backgroundColor:Colors.PRIMARY,
    paddingVertical:'8@msr',
    paddingHorizontal:'14@msr',
    width:'80@s',

  },

  modalNo:{
    alignItems:'center',
    borderRadius:99,
    backgroundColor:Colors.PRIMARY_LIGHT,
    paddingVertical:'8@msr',
    paddingHorizontal:'14@msr',
    width:'80@s',

  },

  modalBtnText:{
    textAlign:'center',
    fontFamily:'kaisei',
    color:Colors.WHITE,
  }

})
