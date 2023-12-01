import { taskgGetAll } from "./taskGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../storageConfig"

export async function taskRemoveByName(deleteTaks:string){

    const storedTask = await taskgGetAll()

    const newStoredTask = storedTask.filter(task => task.task !== deleteTaks)

    await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(newStoredTask))
    await AsyncStorage.removeItem(`${STORAGE_KEY}-${deleteTaks}`)

}