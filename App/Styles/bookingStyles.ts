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
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  },

  modalSubContainer:{
    borderRadius:10,
    borderWidth:3,
    borderColor:Colors.SECONDARY,
    backgroundColor:Colors.WHITE,
    marginTop:'300@vs',
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
  },

  modalReviewContainer:{
    backgroundColor:Colors.WHITE,
    borderRadius:10,
    borderWidth:3,
    borderColor:Colors.SECONDARY,
    marginTop:'150@vs',
    width:'80%',
    height:'500@vs',
    padding:'20@msr',
  },

  reviewTitle:{
    fontSize:24,
    fontFamily:'kaisei',
    textAlign:'center',
    color:Colors.PRIMARY,
    marginTop:10,
  },

  closeReviewModal:{
    position:'absolute',
    top:10,
    right:10,
  },

  reviewBtn:{
    alignSelf:'center',
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    paddingHorizontal:12,
    paddingVertical:8,
  },

  reviewBtnText:{
    color:Colors.WHITE,
    fontFamily:'kaisei',
    textAlign:'center',
    fontSize:20,
  },

  reviewNMInput:{
    marginVertical:'10@vs',
    alignSelf:'center',
    padding:5,
    width:'160@s',
    height:'30@vs',
    borderRadius:10,
    backgroundColor:Colors.SECONDARY_LIGHT,
    fontFamily:'kaisei',
    fontSize:16,
  },

  reviewCInput:{
    borderColor:Colors.SECONDARY,
    alignSelf:'center',
    padding:5,
    width:'220@s',
    height:'180@vs',
    borderRadius:10,
    backgroundColor:Colors.SECONDARY_LIGHT,
    fontFamily:'kaisei',
    fontSize:16,
    marginTop:'10@vs',
    marginBottom:`20@vs`,
  }

})
