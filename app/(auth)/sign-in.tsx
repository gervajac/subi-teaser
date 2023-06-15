import { Text, View, Button, Alert, SafeAreaView } from "react-native";
import { useAuth } from "../../src/context/auth";
import { TextInput } from "@react-native-material/core";
import { Link, Tabs } from "expo-router";
import { useState } from "react";
import auth0 from 'react-native-auth0';

const auth0Config = {
  clientId: "U9eZhNFhLemhM7cN42ijlTSqkTG3pKj4",
  domain: "dev-o3oiqmf8nwbj4qxk.us.auth0.com",
};


export default function SignIn() {
  // const { singIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = () => {
      // singIn(email, password)
      //    .catch(err => {
      //        alert(err.message);
      //     })
  }
  console.log(email, password)
  const handleRegister = () => {
    // Crea una nueva instancia de Auth0
    const auth0Instance = new auth0(auth0Config);
    console.log(auth0Instance, "asd")
    // Llama al endpoint de registro de Auth0 para crear un nuevo usuario
    auth0Instance.auth
      .createUser({
        email,
        password,
        connection: 'Username-Password-Authentication', // Nombre de la estrategia de autenticación en Auth0
      })
      .then(() => {
        Alert.alert('Registro exitoso', 'El usuario ha sido registrado correctamente.');
      })
      .catch((error: Error) => {
        Alert.alert('Error', error.message);
        
      });
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gray",
  }}>
      <View>
      <Text>Registro</Text>
      <TextInput label="email" variant="standard" value={email} onChangeText={setEmail} />
      <TextInput label="password" secureTextEntry variant="standard" value={password} onChangeText={setPassword} />
      <Button onPress={handleRegister} title="Sign In" />
      </View>
      <Link href="/register">Identificate 🚌</Link>
    </SafeAreaView>
  );
}
