import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { CardSwiper } from '../components/completes/CardSwiper';
import { ProfileContext } from '../contexts/ProfileContext';
import BASE_URL from '../services/base_url';

export const ProfileList = ({ navigation }) => {
    const { setProfile } = useContext(ProfileContext);

    const [petsInfo, setPetInfo] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data=>{
            const mappedPetData = data.pets.map(pet => {
                const petInfoForCard = {
                    title: pet.name,
                    img: pet.photo,
                    callback: () => {
                        setProfile(pet.id)
                        navigation.navigate('Profile')
                    }
                }
                return petInfoForCard;
            })
            setPetInfo(mappedPetData);
        })
        .catch(e => alert(`Error: ${e}` ))
    }, []);

    return (
        <View>
            <CardSwiper info={petsInfo}/>
        </View>
    );
}
  
