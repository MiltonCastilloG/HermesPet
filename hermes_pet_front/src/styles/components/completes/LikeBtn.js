import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    likeBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 20,
        backgroundColor: "white",
        borderRadius: 50,
        borderColor: 'grey',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.5,
        elevation: 6,
  },
});