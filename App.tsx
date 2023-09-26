import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    }}>
      <Text style={{
        color: '#FDFCFE',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Nome do evento
      </Text>
      <Text
      style={{
        color: '#6B6B6B',
        fontSize: 16
      }}>
        Segunda, 25 de setembro de 2023
      </Text>
    </View>
  )
}
