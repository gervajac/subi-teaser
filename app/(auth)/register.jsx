import { Text, View, Button, SafeAreaView } from "react-native";
import { useAuth } from "../../src/context/auth";
import { TextInput } from "@react-native-material/core";
import { Link, Tabs } from "expo-router";
import { useState } from "react";

export default function regist() {
  const {regist } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnClick = () => {
        regist(email, password)
            .then(user =>{
                if(user){
                    alert('Usuario registrado correctamente, ve a iniciar sesion');
                }else {
                    alert('Usuario no registrado');
                }
            })
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }}>
      <View>
        <Text>Register</Text>
        <TextInput label="Email" variant="standard" onChangeText={setEmail} />
        <TextInput label="Password" variant="standard" onChangeText={setPassword}/>
        <Button onPress={handleOnClick} title="Sign In" />
      </View>
      <Link href="/sign-in">Identificate 🚌</Link>
    </SafeAreaView>
  );
}
