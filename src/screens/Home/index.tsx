import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text
        style={styles.eventDate}>
        Segunda, 25 de setembro de 2023
      </Text>
    </View>
  )
}
