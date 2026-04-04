import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { registerUser } from '../services/api';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const res = await registerUser({ name, email, password });
    console.log(res);
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}