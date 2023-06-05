import { Stack } from "expo-router";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";
import { AuthProvider } from "../context/auth";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <Stack />;
      </AuthProvider>
    </ThemeProvider>
  );
}
