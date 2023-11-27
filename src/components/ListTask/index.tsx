import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../Task'
import { EmpyList } from '../EmpyList'
import { useState } from 'react'

interface Props {
    ListTask: string[],
    remove: (task: string) => void
}

export function ListTask({ ListTask, remove }: Props) {
    const [qntTaskResolver, setQntTaskResolver] = useState<number>(0)

    return (
        <>
            <View style={styles.section_title}>

            <View style={styles.section_title_task}>
                    <Text style={styles.header_task_create} >
                        Criadas
                    </Text>
                    <QntTask qnt={ListTask.length} />
                </View>
                <View>
                <View style={styles.section_title_task}>
                        <Text style={styles.header_task_resolver}>
                            Resolvidas
                        </Text>
                        <QntTask qnt={qntTaskResolver} />
                    </View>
                </View>
            </View>
            <FlatList
                data={ListTask}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        task={item}
                        onChangeResolver={setQntTaskResolver}
                        data={qntTaskResolver}
                        remove={() => remove(item)} />
                )}
                ListEmptyComponent={<EmpyList />}
            />
        </>
    )
}

function QntTask({ qnt }: { qnt: number }) {
    return (
        <Text style={styles.qnt_task}>
            {qnt}
        </Text>
    )
}