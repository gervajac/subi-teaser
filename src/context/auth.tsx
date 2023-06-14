import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user: User, setUser: (user: User | undefined) => void) {
  const segments = useSegments();
  const router = useRouter();

  function getUserFromStorage() {
    AsyncStorage.getItem("user")
      .then((user) => {
        if(user != null)
          setUser(JSON.parse(user));
      })
      .catch((err) => {
        setUser(undefined);
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

  async function regist(email: string, password: string) {
    const user = { email, password };
    // @ts-ignore
    const users = JSON.parse(await AsyncStorage.getItem("users")) || [];
    users.push(user);
    await AsyncStorage.setItem("users", JSON.stringify(users));
    return user;
  }
  
  async function singIn(email: string, password: string) {
    const users: User[] = JSON.parse((await AsyncStorage.getItem("users")) || "[]");
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
    setUser(undefined);
  }
  
  return {singIn, regist, singOut}
}

export interface User {
  email: string;
  password: string;
}

export interface AuthContext {
  regist: (email: string, password: string) => Promise<User>;
  singIn: (email: string, password: string) => Promise<void>;
  singOut: () => Promise<void>;
  user: User | undefined;
}

export function AuthProvider( props: {children: React.ReactNode }) {
  const [user, setUser] = React.useState<User>();
  // @ts-ignore
  const {singIn, regist, singOut} = useProtectedRoute(user, setUser);

  return (
    <AuthContext.Provider
    // @ts-ignore  
    value={{
        regist,
        singIn,
        singOut,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
