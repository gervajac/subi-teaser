import React from 'react';
import {
    DarkTheme,
    DefaultTheme,
    useTheme,
  } from "@react-navigation/native";
import { Slot } from 'expo-router';
import { ThemeProvider } from "@react-navigation/native";
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {

    const auth0Config = {
        clientId: 'U9eZhNFhLemhM7cN42ijlTSqkTG3pKj4',
        domain: 'dev-o3oiqmf8nwbj4qxk.us.auth0.com',
        redirectUri: 'http://localhost:19000',
      };


    return (
        <Auth0Provider {...auth0Config}>
        <ThemeProvider value={DefaultTheme}>
            <Slot />
        </ThemeProvider>
        </Auth0Provider>
    );
};

export default App;