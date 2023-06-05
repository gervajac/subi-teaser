import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (!user && !inAuthGroup) {
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  console.log(user);
  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        singIn: () => setUser({ name: "John Doe" }),
        singOut: () => setUser(null),
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
