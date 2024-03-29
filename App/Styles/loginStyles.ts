import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const loginStyles = StyleSheet.create({
  container:{
    alignItems:'center',
  },

  catchText:{
    marginTop:60,
    fontFamily:'kaisei',
    fontSize:32,
    color:Colors.BLACK,
  },

  img:{
    height:'40%',
    width:'100%',
    objectFit:'contain',
    marginBottom:20,

  },

  loginContainer:{
    width:'100%',
    height:'60%',
    backgroundColor:Colors.PRIMARY,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
  },

  expText:{
    color:Colors.WHITE,
    paddingHorizontal:20,
    marginTop:18,
    fontFamily:'kaisei',
    fontSize:16,
  },

  loginBtn:{
    marginTop:5,
    backgroundColor:Colors.SECONDARY,
    paddingHorizontal:10,
    borderRadius:30,
  },

  loginText:{
    color:Colors.PRIMARY,
    padding:10,
    fontFamily:'kaisei',
    fontSize:22,
    textAlign:'center',

  },

  loginInput:{
    width:200,
    height:34,
    backgroundColor:Colors.WHITE,
    borderRadius:5,
    marginVertical:5,
    padding:5,

  },

})
