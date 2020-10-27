import React from 'react';
import {View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/components/pieces/ImageCard'; 

export const ImageCard = ( { title, callback, img } ) => (
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image
                style={styles.img}
                source={{ uri: img }}
                />
            </View>
            <TouchableOpacity
            style={styles.titleBtn}
            onPress={callback}>
                <Text style={styles.titleText}>{`Meet ${title}`}</Text>
            </TouchableOpacity>
        </View>
);