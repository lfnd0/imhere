import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { Participant } from "../components/Participant"

export function Home() {
  const participants = [
    'Leo', 'Robbie', 'Paul', 'Logan', 'Mary', 'Spencer','Gunner',
    'Annie', 'Sonny', 'Oliver', 'Lucy', 'George', 'Rocky'
  ]

  function handleParticipantAdd() {
    console.log("Adicionou")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removeu ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text
        style={styles.eventDate}>
        Segunda, 26 de setembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity >
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            A lista de participantes está vazia. Adicione os participantes.
          </Text>
        )}
      />

    </View>
  )
}
