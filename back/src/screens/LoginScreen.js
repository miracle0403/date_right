import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { loginUser } from '../services/api';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await loginUser({ email, password });
    console.log(res);
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}