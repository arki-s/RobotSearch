import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const homeStyles = StyleSheet.create({
  container:{
    padding:5,
  },

  header:{
    backgroundColor:Colors.PRIMARY,
    height:160,
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
    marginVertical:15,
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
    padding:8,
    paddingHorizontal:12,
    marginVertical:5,
    width:270,
    borderRadius:10,
    fontFamily:'kaisei',
  },

  searchIcon:{
    padding:10,
    backgroundColor:Colors.WHITE,
    borderRadius:10,
  },

  primaryText:{
    fontFamily:'kaisei',
  },

  headerLogo:{
    width:60,
    height:60,
    objectFit:'contain',

  },

  headerText:{
    color:Colors.WHITE,
    fontSize:30,
    fontFamily:'kaisei',
  },

  slider: {
    marginVertical: 10,
    marginRight: 10,
  },

  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 10,
    objectFit: 'cover',
  },

  categoryContainer:{
    marginTop:15,
    alignItems:'center',
    backgroundColor:Colors.WHITE,
    borderRadius:99,
    height:75,
    width:75,
    padding:5,
    marginHorizontal:10,
    marginBottom:5,
  },

  categoryImg:{
    height:45,
    width:45,
    objectFit:'contain',

  },

  categoryText:{
    fontFamily:'kaisei',
  },

  robotContainer:{
    marginTop:10,
    backgroundColor:Colors.WHITE,
    padding:8,
    marginRight:8,
    borderRadius:10,
    alignItems:'center',
    width:180,
  },

  robotImg:{
    height:120,
    width:150,
    objectFit:'cover',
    borderRadius:10,
  },

  robotText:{
    fontFamily:'kaisei',
    fontSize:18,
    marginVertical:8,
    color:Colors.BLACK,
  },

  robotCostText:{
    fontFamily:'kaisei',
    fontSize:16,
    color:Colors.PRIMARY,
  }



})
