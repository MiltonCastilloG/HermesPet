import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgContainer: {
      width: '100%',
      height: '45%',
      borderBottomWidth: 5,
      borderBottomColor: '#4285f4',
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    textContainer: {
      alignContent: 'center'
    },
    name: {
      fontSize: 30,
    },
    description: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    likeBtn: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 10,
      bottom: 20,
      backgroundColor: "white",
      borderRadius: 50
  },
});