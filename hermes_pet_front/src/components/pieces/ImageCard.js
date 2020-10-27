import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

export const ImageCard = ( { name, callback, img } ) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image
                style={styles.img}
                source={{ uri: img }}
                />
            </View>
            <Button style={styles.cardTitle} onPress={callback} title={`${name} ->`} />
        </View>
    );
}
  
const styles = StyleSheet.create({
    cardContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        height: "100%"
      },
    cardTitleBtn: {
        fontSize: 20,
        borderTopStartRadius: 5,
        height: 40
    },
    imgContainer: {
        width: "100%",
        height: "100%",
    },
    img: {
        height: "100%",
        resizeMode: 'stretch'
    }
});