import { Text, View, Button } from "react-native";
import { useAuth } from "../../src/context/auth";
import { TextInput } from "@react-native-material/core";
import { Link, Tabs } from "expo-router";
import { useState } from "react";


export default function SignIn() {
  const { singIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
      singIn(email, password)
         .catch(err => {
             alert(err.message);
          })
  }

  return (
    <View>
      <Tabs.Screen options={{ tabBarLabel: "Login" }} />
      <Text>Sign In</Text>
      <TextInput label="email" variant="standard" onChangeText={setEmail} />
      <TextInput label="password" variant="standard" onChangeText={setPassword} />
      <Button onPress={handleOnClick} title="Sign In" />
      <Link href="/register">Registrate 🚌</Link>
    </View>
  );
}
