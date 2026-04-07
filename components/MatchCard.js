import { View, Text, TouchableOpacity } from 'react-native';

export default function MatchCard({ user }) {
  return (
    <View style={{
      backgroundColor: '#1a1a1a',
      padding: 20,
      borderRadius: 16,
      marginBottom: 15
    }}>
      <Text style={{ color: '#fff', fontSize: 16 }}>
        “This could be the beginning of something interesting.”
      </Text>

      <Text style={{ color: '#aaa', marginTop: 10 }}>
        {user.name}
      </Text>

      <TouchableOpacity style={{
        marginTop: 15,
        backgroundColor: '#ff4d6d',
        padding: 10,
        borderRadius: 10
      }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          ❤️ Like
        </Text>
      </TouchableOpacity>
    </View>
  );
}