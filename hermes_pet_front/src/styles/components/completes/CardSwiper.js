import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardSwiper: {
        width: "100%",
        height: "100%"
    },
    nextBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: 300,
        backgroundColor: "white",
        borderRadius: 50
    },
    nextBtnRight: {
        right: 10,
    },
    nextBtnLeft: {
        left: 10,
    },
    nextText: {
        fontSize: 20,
        color: "#34a853"
    }
});