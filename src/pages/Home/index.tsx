import { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { Header } from "../../components/Header";
import { ListTask } from "../../components/ListTask";
import { styles } from "./styles";
import { taskCreate } from "../../storage/tasks/taskCreate";
import { taskgGetAll } from "../../storage/tasks/taskGetAll";
import { taskRemoveByName } from "../../storage/tasks/taskRemoveByName";
import { TaskStorageDTO } from "../../storage/tasks/taskDTO";
import { AppError } from "../../utils/AppError";

type Props = {
  task: string;
  checked: string;
}

export function Home() {
  const [listTask, setListTask] = useState<string[]>([])
  const [task, setTask] = useState('')

  async function addTask() {

    try {

      if (!task) {
        return Alert.alert("Adicione uma tarefa", "Adiciona uma atividade uma nova tarefa.")
      }

      const newTaks = {
        task,
        checked: true
      }

      await taskCreate(newTaks)
      setTask('')
      fetchTask()
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Nova Atividade", error.message)
      }
      console.log(error)
      return Alert.alert("Nova Atividade", 'Não foi possivel cadastrar atividade.')
    }
  }

  async function removeTask(taks: string) {
    await taskRemoveByName(taks)
    setTask('')
    fetchTask()
  }

  async function fetchTask() {
    const data = await taskgGetAll()
    const dataTaks = data.map((element) => (element.task))

    setListTask(dataTaks)
  }

  useEffect(() => {
    fetchTask()
  }, [task])

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