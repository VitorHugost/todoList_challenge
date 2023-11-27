import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#262626",
        padding:12,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        gap:6,
    },
    task_unchecked:{flex:1 ,color:"#fff", fontSize:16},
    task_checked:{flex:1,color:"#fff",fontSize:16, maxWidth:270,textDecorationLine:"line-through"}
})