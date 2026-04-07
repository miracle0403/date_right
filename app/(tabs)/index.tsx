import { useState } from 'react';
import { View, Button, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { getMatches } from '../../services/api';
import MatchCard from '../../components/MatchCard';

export default function HomeScreen() {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    const token = await SecureStore.getItemAsync('token');
    const res = await getMatches(token);
    setMatches(res.matches || []);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#0a0a0a' }}>
      
      <Button title="Discover" onPress={fetchMatches} />

      <ScrollView style={{ marginTop: 20 }}>
        {matches.map((user, index) => (
          <MatchCard key={index} user={user} />
        ))}
      </ScrollView>

    </View>
  );
}