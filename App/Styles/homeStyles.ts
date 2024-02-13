import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const homeStyles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
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
    gap:5,
    alignItems:'center',
    marginBottom:10,
  },

  textInput:{
    backgroundColor:Colors.WHITE,
    padding:8,
    marginVertical:5,
    width:200,
    borderRadius:10,
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

  contentsContainer:{
  }


})
