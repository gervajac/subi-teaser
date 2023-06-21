import React from 'react';
import { View, Button } from 'react-native';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0Popup = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <View>
      <Button title="Login" onPress={() => loginWithRedirect()} />
    </View>
  );
};

export default Auth0Popup;