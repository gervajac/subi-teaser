import React, { useState } from 'react';
import { View, Button, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  clientId: "U9eZhNFhLemhM7cN42ijlTSqkTG3pKj4",
  domain: "dev-o3oiqmf8nwbj4qxk.us.auth0.com",
});

const Auth0Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [authUrl, setAuthUrl] = useState('');
  console.log(modalVisible, authUrl)
  const handleLogin = async () => {
    try {
      const url = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        audience: 'YOUR_API_AUDIENCE',
        redirectUri: 'YOUR_REDIRECT_URI',
        responseType: 'token id_token',
      });
      setAuthUrl(url);
      setModalVisible(true);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleWebViewClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Button title="Login with Auth0" onPress={handleLogin} />
      <Modal visible={modalVisible}>
        <WebView source={{ uri: authUrl }} onClose={handleWebViewClose} />
      </Modal>
    </View>
  );
};

export default Auth0Popup;