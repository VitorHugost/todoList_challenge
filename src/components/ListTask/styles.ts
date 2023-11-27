import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    section_title: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#808080",
    },
    section_title_task:{
        flexDirection: 'row',
        alignItems:'center',
        gap:4
    },
    header_task_create:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#4EA8DE",
    },
    header_task_resolver:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#8284FA"
    },
    qnt_task: {
        backgroundColor: "#333333",
        color: "#FFF",
        paddingHorizontal:6,
        paddingVertical:1,
        borderRadius:100
    }
})
