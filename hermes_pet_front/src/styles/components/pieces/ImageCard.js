import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        height: '100%'
    },
    titleBtn: {
        backgroundColor: '#ff5c5c',
        height: 50,
        justifyContent: "center"
    },
    titleText: {
        color: "white",
        fontSize: 18,
        alignSelf: "center"
    },
    imgContainer: {
        width: '100%',
        height: '100%',
    },
    img: {
        height: '100%',
        resizeMode: 'stretch'
    }
});