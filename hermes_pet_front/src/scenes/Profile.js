import React, { useContext,useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { LikeBtn } from '../components/completes/LikeBtn';
import { styles } from '../styles/scenes/Profile';
import BASE_URL from '../services/base_url';

export const Profile = () => {
  const { currentProfile } = useContext(ProfileContext);

  //const profile = petsInfoProto[currentProfile];
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/${currentProfile}`)
    .then(res => res.json())
    .then(data=> setProfile(data.pet))
    .catch(e => alert(`Error: ${e}` ))
  }, []);

  const like = () => {
    fetch(`${BASE_URL}/like/${currentProfile}`, {
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
  
