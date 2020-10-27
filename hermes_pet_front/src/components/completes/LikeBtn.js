import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export const LikeBtn = ({ isLiked,  callback}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={ callback }
    style={styles.likeBtn}>
        {
            isLiked
            ? <AntDesign name="heart" size={24} color="red"/>
            : <AntDesign name="hearto" size={24} color="red"/>
        }
    </TouchableOpacity>
  );
}
  
const styles = StyleSheet.create({
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