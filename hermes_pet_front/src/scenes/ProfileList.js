import React, { useContext } from 'react';
import { View } from 'react-native';
import { CardSwiper } from '../components/completes/CardSwiper';
import { ProfileContext } from '../contexts/ProfileContext';

const petsInfoProto = [
    {
        id: 0,
        name: "Katyusha",
        photo: "https://i.insider.com/5484b33a6da8119577fbada9?width=700&format=jpeg&auto=webp"
    },
    {
        id: 1,
        name: "Bismark",
        photo: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=700&format=jpeg&auto=webp"
    },
    {
        id: 2,
        name: "Leonard",
        photo: "https://i.insider.com/5484e527ecad04de4324638b?width=700&format=jpeg&auto=webp"
    },
]

export const ProfileList = ({ navigation }) => {
    const { setProfile } = useContext(ProfileContext);

    const petsInfo = petsInfoProto.map(pet => {
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

    return (
        <View>
            <CardSwiper info={petsInfo}/>
        </View>
    );
}
  
