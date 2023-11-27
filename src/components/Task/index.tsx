import { Image, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { styles } from "./styles";
import { useState } from "react";

interface Props {
    task: string,
    data:number,
    remove: () => void,
    onChangeResolver: any,
}

export function Task({ task, remove,onChangeResolver,data}: Props) {

    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            
            <RadioButton
                value={task}
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                    setChecked(!checked)
                    if(!checked) return onChangeResolver(data+1)
                    onChangeResolver(data-1)
                }}
                color="#4EA8DE"
                uncheckedColor="#4EA8DE"
            />
            <Text style={checked ? styles.task_checked : styles.task_unchecked}>{task}</Text>
            <TouchableOpacity onPress={()=>{
                onChangeResolver(data ? data-1: data)
                remove()}}>
                
                <Image
                    source={require('../../../assets/trash.png')}
                    style={{ padding:10}}

                />
            </TouchableOpacity>
        </View>
    )
}