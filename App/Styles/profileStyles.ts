import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";
import { ScaledSheet, moderateScale } from 'react-native-size-matters/extend';
import { s, vs, ms, mvs } from 'react-native-size-matters';


Dimensions.get('window')
const { width, height, scale } = Dimensions.get('window');

export const profileStyles = ScaledSheet.create({
  container:{
    flex:1,
  },

  header:{
    backgroundColor:Colors.PRIMARY,
    height:'80@vs',
    width:'100%',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },

  titleText:{
    marginTop:'20@vs',
    textAlign:'center',
    fontFamily:'kaisei',
    color:Colors.SECONDARY,
    fontSize:26,
  },

  logoutBtn:{
    backgroundColor:Colors.PRIMARY_LIGHT,
    borderRadius:99,
    paddingVertical:5,
    paddingHorizontal:12,
    alignSelf:"center",
  },

  btnText:{
    fontFamily:'kaisei',
    color:Colors.WHITE,
    fontSize:18,
  },

  dataText:{
    fontFamily:'kaisei',
    fontSize:18,
    marginBottom:'30@vs',
  },

  dataContainer:{
    padding:'20@msr',
    borderRadius:10,
    backgroundColor:Colors.WHITE,
    width: '80%',
    alignSelf: 'center',
    marginVertical: '30%'
  },

})
