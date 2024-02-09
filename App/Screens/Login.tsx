import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import React from 'react'
import { loginStyles } from "../Styles/loginStyles";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../Styles/globalStyles";

export default function Login() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <View style={loginStyles.container}>

      <Text style={loginStyles.catchText}>ロボットをより身近に</Text>
      <Image source={require('../../assets/images/connection.jpg')} style={loginStyles.img} />


      <View style={loginStyles.loginContainer}>
        <Text style={loginStyles.expText}>ロボットの活用が進んできていますが、個人単位での活用はまだまだ発展途上。これはロボットをより身近に感じ、新たな社会への一歩を踏み出すためのサービスです。</Text>

        <View style={{ alignItems: 'center', marginTop: 16, }}>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email..."
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            style={loginStyles.loginInput}
          />


          <TextInput
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            style={loginStyles.loginInput}
          />

          <TouchableOpacity onPress={onSignInPress} style={loginStyles.loginBtn}>
            <Text style={loginStyles.loginText}>ログイン</Text>
          </TouchableOpacity>

        </View>


      </View>


    </View>
  );
}
