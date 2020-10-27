import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageCard } from '../pieces/ImageCard';
import Swiper from 'react-native-swiper'

export const CardSwiper = ( { info } ) => {
    const swiper_content = info.map((elem, index) => <ImageCard
        key={`pet-card-${index}`}
        name={elem.name} 
        callback={elem.callback}
        img={elem.img}
    />)

    return (
        <Swiper style={styles.cardSwiper} showsButtons loop={false}>
            { swiper_content }
        </Swiper>
    );
}
  
const styles = StyleSheet.create({
    cardSwiper: {
        width: "100%",
        height: "100%"
    },
});