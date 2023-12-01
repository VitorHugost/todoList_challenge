import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../storageConfig"
import { TaskStorageDTO } from "./taskDTO"

export async function taskgGetAll(){
    const storage = await AsyncStorage.getItem(STORAGE_KEY)

    const task:TaskStorageDTO[] = storage ? JSON.parse(storage) : []
    return task
}