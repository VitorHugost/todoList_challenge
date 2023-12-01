import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../storageConfig"
import { TaskStorageDTO } from "./taskDTO"

export async function taskgGetByName(taskName: string) {

    const storedTask = await AsyncStorage.getItem(STORAGE_KEY)

    const taskWithName = JSON.parse(storedTask!).filter((element: TaskStorageDTO) => element.task === taskName)

    const data: TaskStorageDTO[] = taskWithName ? taskWithName : []

    return data
}