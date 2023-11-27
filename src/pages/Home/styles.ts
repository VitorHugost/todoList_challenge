import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1E1E1E",
        flex:1
    },
    section_input:{
        flexDirection:"row",
        marginHorizontal:20,
        gap:8,
        position:"relative",
        top:-40
    },
        input:{
        flex:1,
        padding:20,
        backgroundColor:"#262626",
        borderRadius:5,
        fontSize:18,
        color:"#fff"
    },
    button:{
        backgroundColor:"#1E6F9F",
        borderRadius:5,
        padding:24,
        justifyContent:"center"
    }
   
})