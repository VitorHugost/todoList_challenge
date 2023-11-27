import { View, Image, Text } from 'react-native'
import { styles } from './styles'

export function EmpyList() {
    return (
        <View style={styles.container}>
            <Image style={{ marginVertical: 18 }} source={require('../../../assets/clipboard.png')} />

            <Text style={{ color: "#808080", fontWeight: 'bold', fontSize: 16 }}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={{ color: "#808080" }}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}