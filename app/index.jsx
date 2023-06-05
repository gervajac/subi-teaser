import { View, StyleSheet, TextInput } from "react-native";
import { Link, Stack } from "expo-router";

import { useState } from "react";
import { Button } from "@react-native-material/core";
import { useAuth } from "../context/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = `/details?email=${email}&password=${password}`;
  const { singOut } = useAuth();
  return (
    <>
      <View>
        <Stack.Screen options={{ title: "Home" }} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Link
          href={{
            pathname: "/details",
            params: {
              email,
              password,
            },
          }}
        >
          Go to Details 🥇
        </Link>
        <Button onPress={() => alert("Hello")} title="hola" />
        <Button onPress={singOut} title="Log out" />

        <Link href={url}>Go to Details</Link>
      </View>
    </>
  );
}
