import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from 'react-native-paper';
import { taskCheck } from "../../storage/tasks/taskCheck";
import { taskgGetByName } from "../../storage/tasks/taskGetByName";
import { styles } from "./styles";
import { taskgGetAll } from "../../storage/tasks/taskGetAll";

interface Props {
    task: string,
    data: number,
    remove: () => void,
    onChangeResolver: any,
}

export function Task({ task, remove, onChangeResolver, data }: Props) {

    const [checked, setChecked] = useState(false)

    async function handleCheck(task: string) {

        const taskName = await taskgGetByName(task)
        await taskCheck(taskName[0])

        checked ? onChangeResolver(data - 1) : onChangeResolver(data + 1) 

        setChecked(taskName[0].checked)
        fetchCheck(task)
    }

    async function fetchCheck(task:string) {
        const allTask = await taskgGetAll()
        const taskResolver = allTask.filter((element)=>element.checked == false).length 
        onChangeResolver(taskResolver)

        allTask.map((element) => {
            if (element.task == task) {
                setChecked(!element.checked)
            }
        })
    }

    useEffect(() => {
        fetchCheck(task)
    }, [])

    return (
        <View style={styles.container}>

            <RadioButton
                value={task}
                status={checked ? "checked" : "unchecked"}
                onPress={() => handleCheck(task)}
                color="#4EA8DE"
                uncheckedColor="#4EA8DE"
            />
            <Text style={checked ? styles.task_checked : styles.task_unchecked}>{task}</Text>
            <TouchableOpacity onPress={() => {
                onChangeResolver(data ? data - 1 : data)
                remove()
            }}>

                <Image
                    source={require('../../../assets/trash.png')}
                    style={{ padding: 10 }}

                />
            </TouchableOpacity>
        </View>
    )
}