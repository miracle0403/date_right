import { View, Text } from 'react-native';

export default function LineCard({ text }) {
  return (
    <View style={{
      backgroundColor: '#1a1a1a',
      padding: 20,
      borderRadius: 20,
      borderColor: '#ff4d6d',
      borderWidth: 1
    }}>
      <Text style={{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
      }}>
        {text}
      </Text>
    </View>
  );
}