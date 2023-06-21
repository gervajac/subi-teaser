import { View, StyleSheet, TextInput,Image, Text } from "react-native";
import { Link, Stack } from "expo-router";

import { useState } from "react";
import { Button, FAB, } from "@react-native-material/core";
// import { useAuth } from "../../src/context/auth";

// @ts-ignore
import qrImage from '../../src/assets/qr-image.png';
import {useAuth0} from '@auth0/auth0-react'



export default function Home() {
  const {user, logout} = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = `/details?email=${email}&password=${password}`;
 // const { singOut } = useAuth();
  return (
  
      <View style={{flex:1, padding:2}}>
        <Stack.Screen options={{ title: "Home" }} />
        <View style={{flex:4, justifyContent:'center', alignItems:'center'}}>
          <Image source={qrImage} style={{height:300, width:300}}/>
        {user && <Text>{user.name}</Text>}
        </View>
        <View style={{flex:1.5, margin:2, padding:4, justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
        

        <Button onPress={() => alert("Hello")} title="hola" />
        <Button onPress={() => logout()} color="red" title="Logout" />
        <FAB onPress={() => alert("Hello")} />

        </View>
      </View>

  );
}
