import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../components/Participant'
import { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

export function Home() {
  const [date] = useState<string>(dayjs().format('dddd, DD [de] MM [de] YYYY'))

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName.trim().length < 4) {
      return Alert.alert('Nome inválido', 'O nome do partipante deve possuir no mínimo 4 caracteres')
    }

    if (!participantName.trim()) {
      return Alert.alert('Nome vazio', 'O nome do partipante deve ser preenchido.')
    }

    if (participants.includes(participantName.trim())) {
      return Alert.alert('Participante duplicado', 'Este participante já foi adicionado.')
    }

    setParticipants(prevState => [...prevState, participantName.trim()])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
        Lista de participantes
      </Text>
      <Text style={styles.eventDate}>
        {date}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          value={participantName}
          onChangeText={setParticipantName}
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
            A lista de participantes está vazia. Adicione os nomes dos participantes.
          </Text>
        )}
      />

    </View>
  )
}
