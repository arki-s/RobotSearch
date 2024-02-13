import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const homeStyles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },

  header:{
    backgroundColor:Colors.PRIMARY,
    height:95,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    gap:20,
    alignItems:'center',
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
