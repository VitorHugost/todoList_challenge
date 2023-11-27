import { useState } from "react";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { Header } from "../../components/Header";
import { ListTask } from "../../components/ListTask";
import { styles } from "./styles";

export function Home() {
  const [listTask, setListTask] = useState<string[]>([])
  const [task, setTask] = useState('')

  function addTask() {
    if(!task){
      return Alert.alert("Adicione uma tarefa","Adiciona uma atividade uma nova tarefa")
    }
    setListTask(listTask => [...listTask, task])
    setTask('')
  }
  function removeTask(taks: string) {
    setListTask(prevState => prevState.filter(participant => participant !== taks))
    setTask('')
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.section_input}>

          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6B6B6B"}
            onChangeText={setTask}
            value={task} />

          <TouchableOpacity style={styles.button} onPress={addTask} >
            <Image source={require('../../../assets/plusadd.png')} />
          </TouchableOpacity>
        </View>

        <ListTask ListTask={listTask} remove={removeTask} />
      </View>
    </>
  )
}