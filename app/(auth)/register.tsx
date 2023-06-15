import { Text, View, Button, Alert, SafeAreaView } from "react-native";
import { useAuth } from "../../src/context/auth";
import { TextInput } from "@react-native-material/core";
import { Link, Tabs } from "expo-router";
import { useState } from "react";
import Auth0 from "react-native-auth0";

const auth0Config = {
  clientId: "U9eZhNFhLemhM7cN42ijlTSqkTG3pKj4",
  domain: "dev-o3oiqmf8nwbj4qxk.us.auth0.com",
};

export default function regist() {
  // const {regist } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Crea una nueva instancia de Auth0
    const auth0Instance = new Auth0(auth0Config);

    // Llama al endpoint de autenticación de Auth0 para realizar el inicio de sesión
    auth0Instance.auth
      .passwordRealm({
        username: email,
        password: password,
        realm: "Username-Password-Authentication", // Nombre de la estrategia de autenticación en Auth0
        scope: "openid profile email", // Los scopes que necesitas para tu aplicación
      })
      .then((response: any) => {
        console.log(response,"autenticacion exitosa")
        // El inicio de sesión fue exitoso
        // UTILIZAR LOGICA A GUSTO.
        Alert.alert(
          "Inicio de sesión exitoso",
          "El usuario ha iniciado sesión correctamente."
        );
      })
      .catch((error: Error) => {
        Alert.alert("Error", error.message);
        console.log(error.cause, error.message)
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <View>
        <Text>Ingreso</Text>
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
      <Link href="/sign-in">Registrate 🚌</Link>
    </SafeAreaView>
  );
}
