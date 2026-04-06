import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../../services/api';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleLogin = async () => {
    const res = await loginUser({ email, password });

    if (res.token) {
      await SecureStore.setItemAsync('token', res.token);
      setResponse('Login successful');
    } else {
      setResponse(JSON.stringify(res));
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />

      <Button title="Login" onPress={handleLogin} />

      <Text>{response}</Text>
    </View>
  );
}