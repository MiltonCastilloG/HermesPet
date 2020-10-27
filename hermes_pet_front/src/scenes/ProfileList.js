import React, { useContext } from 'react';
import { View } from 'react-native';
import { CardSwiper } from '../components/completes/CardSwiper';
import { ProfileContext } from '../contexts/ProfileContext';

const petsInfoProto = [
    {
        id: 0,
        name: "Katyusha",
        photo: "https://firebasestorage.googleapis.com/v0/b/hermes-pet-20e9b.appspot.com/o/photo5818882831936501257.jpg?alt=media&token=1309b2b6-b5cd-49e1-84bc-5060c4594d65"
    },
    {
        id: 1,
        name: "Bismark",
        photo: "https://firebasestorage.googleapis.com/v0/b/hermes-pet-20e9b.appspot.com/o/photo5818882831936501258.jpg?alt=media&token=e542615e-8fd0-4a36-9bcf-4fab162033bb"
    },
    {
        id: 2,
        name: "Leonard",
        photo: "https://firebasestorage.googleapis.com/v0/b/hermes-pet-20e9b.appspot.com/o/photo5818882831936501259.jpg?alt=media&token=c3179708-44b3-4a17-a60a-ab53edf82e26"
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
  
