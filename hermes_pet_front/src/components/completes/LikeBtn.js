import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from '../../styles/components/completes/LikeBtn'; 

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