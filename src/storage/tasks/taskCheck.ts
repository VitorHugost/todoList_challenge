import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../storageConfig"
import { TaskStorageDTO } from "./taskDTO"

export async function taskCheck(taskName: TaskStorageDTO) {

    const storedTask = await AsyncStorage.getItem(STORAGE_KEY)

    const updateCheck = JSON.parse(storedTask!).map((element: TaskStorageDTO) => {
        if (element.task == taskName.task) {
            element.checked = !element.checked
        }
        return element
    }
    )

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateCheck))
    return updateCheck
}