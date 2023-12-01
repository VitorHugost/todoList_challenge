import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../storageConfig"
import { taskgGetAll  } from "./taskGetAll"
import { TaskStorageDTO } from "./taskDTO";
import { AppError } from "../../utils/AppError";


export async function taskCreate(newTaks:TaskStorageDTO) {
    try {

        const storedTask = await taskgGetAll()
        const taskExits = storedTask.filter(task => task.task == newTaks.task).length
        if(taskExits > 0){
            throw new AppError('Atividade já cadastrada.')
        }
        const storage = JSON.stringify([...storedTask, newTaks])
        await AsyncStorage.setItem(STORAGE_KEY, storage )

    } catch (error) {

        throw error

    }
}