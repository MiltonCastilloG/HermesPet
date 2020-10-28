import React, { useContext,useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { LikeBtn } from '../components/completes/LikeBtn';
import { styles } from '../styles/scenes/Profile'; 

export const Profile = () => {
  const { currentProfile } = useContext(ProfileContext);

  //const profile = petsInfoProto[currentProfile];
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(`https://europe-west1-hermes-pet-20e9b.cloudfunctions.net/hermesPet/${currentProfile}`)
    .then(res => res.json())
    .then(data=> setProfile(data.pet))
    .catch(e => alert(`Error: ${e}` ))
  }, []);

  const like = () => {
    fetch(`https://europe-west1-hermes-pet-20e9b.cloudfunctions.net/hermesPet/like/${currentProfile}`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data=> setProfile({...profile, liked: data.updatedPet.liked}) )
    .catch(e => alert(`Error: ${e}` ) )
  }
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
          <Image
          style={styles.img}
          source={{ uri: profile.photo }}
          />
      </View>
      <Text style={styles.name}>{ profile.name }</Text>
      <ScrollView>
        <Text style={ styles.description }>{ profile.description }</Text>
      </ScrollView>
      <LikeBtn isLiked={ profile.liked } callback={like}/>
    </View>
  );
}
  
