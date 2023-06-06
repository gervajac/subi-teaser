import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user, setUser) {
  const segments = useSegments();
  const router = useRouter();

  function getUserFromStorage() {
    AsyncStorage.getItem("user")
      .then((user) => {
        setUser(JSON.parse(user));
      })
      .catch((err) => {
        setUser(null);
      });
  }

  React.useEffect(
    () => {
      getUserFromStorage();
    }, //getUserFromStorage(),
    []
  );

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (!user && !inAuthGroup) {
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, segments]);

  async function regist(email, password) {
    const user = { email, password };
    const users = JSON.parse(await AsyncStorage.getItem("users")) || [];
    users.push(user);
    await AsyncStorage.setItem("users", JSON.stringify(users));
    return user;
  }
  
  async function singIn(email, password) {
    /**@type {Array} */
    const users = JSON.parse((await AsyncStorage.getItem("users")) || "[]");
    const user = users.find((user) => user.email === email);
  
    if (user && user.password === password) {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } else {
      throw new Error("Credenciales invalidas");
    }
  }
  
  async function singOut() {
    await AsyncStorage.removeItem("user");
    setUser(null);
  }
  
  return {singIn, regist, singOut}
}


export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const {singIn, regist, singOut} = useProtectedRoute(user, setUser);

  return (
    <AuthContext.Provider
      value={{
        regist,
        singIn,
        singOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
