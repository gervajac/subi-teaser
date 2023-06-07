import { Slot, Stack } from "expo-router";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";
import { AuthProvider } from "../src/context/auth";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(auth)" options={{
            headerShown: false,
            
          }} />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
