import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      {/* <View style={styles.mainContainer}> */}
      <Text style={styles.concept}>ロボットを身近に</Text>
      <Image
        source={require("../../../assets/images/connection.jpg")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.message}>
          ロボットの活用が進んできていますが、個人単位での活用はまだまだ発展途上。これはロボットをより身近に感じ、新たな社会への一歩を踏み出すためのサービスです。
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.btn}>登録する</Text>
          <Text style={styles.btn}>ログイン</Text>
        </View>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: -100,
    height: 410,
    width: 410,
    objectFit: "contain",
  },
  concept: {
    marginTop: 100,
    textAlign: "center",
    fontFamily: "kaisei",
    fontSize: 36,
    height: "20%",
    flex: 1,
  },
  container: {
    backgroundColor: Colors.PRIMARY,
    width: "102%",
    height: "70%",
    padding: 20,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  message: {
    fontFamily: "kaisei",
    color: Colors.WHITE,
    fontSize: 18,
    marginBottom: 25,
  },
  btn: {
    fontFamily: "kaisei",
    fontSize: 22,
    padding: 10,
    paddingBottom: 15,
    marginHorizontal: 5,
    color: Colors.BLACK,
    borderRadius: 99,
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
});
