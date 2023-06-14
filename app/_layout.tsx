import React from 'react';
import {
    ThemeProvider,
    DarkTheme,
    DefaultTheme,
    useTheme,
  } from "@react-navigation/native";
import { Slot } from 'expo-router';

const App = () => {
    return (
        <ThemeProvider value={DarkTheme}>
            <Slot />
        </ThemeProvider>
    );
};

export default App;