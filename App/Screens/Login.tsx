import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import React from 'react'
import { loginStyles } from "../Styles/loginStyles";
import { ScrollView } from "react-native-gesture-handler";

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
      <View style={loginStyles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          style={{ backgroundColor: '#ffffff', marginTop: 30 }}
        />
      </View>

      <View style={loginStyles.inputContainer}>
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={{ backgroundColor: '#ffffff', marginTop: 30 }}
        />
      </View>

      <TouchableOpacity onPress={onSignInPress} style={loginStyles.inputContainer}>
        <Text style={{ color: '#ffffff' }}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}
