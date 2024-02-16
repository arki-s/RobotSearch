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
    marginTop:'10@vs',
    padding:10,
    marginHorizontal:'10@s',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between',

  },

  headerText:{
    fontFamily:'kaisei',
    fontSize:25,
  },

  smallListContainer:{
    marginTop:'10@vs',
    backgroundColor:Colors.WHITE,
    borderRadius:10,
    width:'90%',
    display:'flex',
    flexDirection:'row',
    padding:8,
    gap:10,
    justifyContent:'space-between',

  },

  smallListImg:{
    height:'90@vs',
    width:'90@s',
    borderRadius:10,
  },

  smallListName:{
    fontSize:18,
    fontFamily:'kaisei',
    marginBottom:3,
  },

  smallListText:{
    fontFamily:'kaisei',
    color:Colors.GRAY,
    fontSize:14,
  },

 smallListTypeText:{
  fontFamily:'kaisei',
 },

  smallListTypeH:{
    paddingVertical:5,
    paddingHorizontal:8,
    borderRadius:5,
    backgroundColor:Colors.PRIMARY,
  },

  smallListTypeC:{
    paddingVertical:5,
    paddingHorizontal:8,
    borderRadius:5,
    backgroundColor:Colors.PRIMARY_LIGHT,
  },

  smallListTypeD:{
    paddingVertical:5,
    paddingHorizontal:8,
    borderRadius:5,
    backgroundColor:Colors.SECONDARY,
  },

  smallListTypeO:{
    paddingVertical:5,
    paddingHorizontal:8,
    borderRadius:5,
    backgroundColor:Colors.SECONDARY_LIGHT,
  },

  smallListNone:{
    marginTop:15,
    textAlign:'center',
    fontSize:18,
    fontFamily:'kaisei',
  },

  detailsImg:{
    height:'300@vs',
    width:'100%',
    objectFit:'cover',
    borderRadius:10,
  },

  detailsArrow:{
    position:'absolute',
    top:'30@vs',
    left:'25@s',
    elevation:10,
    zIndex:10,
  },

  detailsContainer:{
    alignItems:'center',
    padding:10,
    marginVertical:10,
  },

  detailsSubContainer:{
    marginVertical:'10@vs',
    backgroundColor:Colors.WHITE,
    borderRadius:10,
    padding:15,
  },

  detailsTextName:{
    fontSize:20,
    fontFamily:'kaisei',
  },

  detailsTextA:{
    fontFamily:'kaisei',
    color:Colors.PRIMARY,

  }
})
