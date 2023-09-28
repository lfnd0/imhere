import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants ] = useState(['Gunner'])

  function handleParticipantAdd() {

    if (participants.includes('Logan')) {
      return Alert.alert('Participante duplicado', 'Este participante já foi adicionado.')
    }

    setParticipants(prevState => [...prevState, 'Spencer'])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Partipante deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text
        style={styles.eventDate}>
        quarta-feira, 27 de setembro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
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
