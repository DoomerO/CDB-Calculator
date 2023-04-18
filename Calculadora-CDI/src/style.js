import {StyleSheet} from "react-native-web";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: '18pt',
        color: '#ffffff',
    },

    div1: {
        margin: '4vh', 
    },

    div2: {
        margin: '8vh',
        border: '4px solid #fff',
        borderRadius:'20%',
        padding: '2%',
        display: 'grid',
    },

    div3Text: {
        float: 'left',
        color: '#fff',
        fontSize: '12pt',
    },

    div3Input: {
        float: 'right',
        backgroundColor: '#000',
        border: "2px solid #ffffff",
        color: "#00dd00",
        borderRadius: "15%",
    },

    text: {
        color: '#fff',
        fontSize: '12pt',
    },

    text2: {
        color: '#fff',
        fontSize: '14pt',
    },

    textM: {
        color: '#0C0',
        fontSize: '14pt',
    },

    textT: {
        color: '#C00',
        fontSize: '14pt',
    },

    textR: {
        color: '#00C',
        fontSize: '14pt',
    },

    input: {
        backgroundColor: '#000',
        border: "2px solid #ffffff",
        color: "#00dd00",
        borderRadius: "15%",
    },

    button: {
        border: "2px solid #ffffff",
        display: "block",
        width: "150px",
        textAlign: "center",
        padding: "10px",
        color: "#fff",
        fontSize: "14pt",
        borderRadius: "15%",
    },
});