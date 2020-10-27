import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ImageCard } from '../pieces/ImageCard';
import { styles } from '../../styles/components/completes/CardSwiper'; 

export const CardSwiper = ( { info } ) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [firstFlag, setFirstFlag] = useState(true);
    const [lastFlag, setLastFlag] = useState(false);

    const cardCollection = info.map((elem, index) => <ImageCard
        key={`pet-card-${index}`}
        title={elem.title} 
        callback={elem.callback}
        img={elem.img}
    />);

    useEffect(()=>{
        if(currentCard === 0)
            setFirstFlag(true)
        else if (firstFlag === true)
            setFirstFlag(false)

        if(currentCard === cardCollection.length -1)
            setLastFlag(true)
        else if(lastFlag === true)
            setLastFlag(false)
    }, [currentCard])

    const changeCard = direction => () =>{
        const nextCurrentCard = currentCard + direction
        if(nextCurrentCard !== currentCard && nextCurrentCard !== cardCollection.length)
            setCurrentCard(nextCurrentCard);
    }

    const nextBtnRight = (isLastElem, callback) => {
        if(!isLastElem)
            return <TouchableOpacity
            activeOpacity={0.7}
            onPress={ callback }
            style={{...styles.nextBtn, ...styles.nextBtnRight}}>
                <Text style={styles.nextText}>{">"}</Text>
            </TouchableOpacity>
    }
    const nextBtnLeft = (isFirstElem, callback) => {
        if(!isFirstElem)
            return <TouchableOpacity
            activeOpacity={0.7}
            onPress={ callback }
            style={{...styles.nextBtn, ...styles.nextBtnLeft}}>
                    <Text style={styles.nextText}>{"<"}</Text>
            </TouchableOpacity>
    }
    
    return (
        <View style={styles.cardSwiper}>
            <View>
                { cardCollection[currentCard] }
            </View>
            { nextBtnRight(lastFlag, changeCard(1)) }
            { nextBtnLeft(firstFlag, changeCard(-1)) }
        </View>
    );
}