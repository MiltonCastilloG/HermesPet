import React, { useContext } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { LikeBtn } from '../components/completes/LikeBtn';
import { styles } from '../styles/scenes/Profile'; 


const petsInfoProto = [
  {
      id: 0,
      name: "Katyusha",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      liked: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/hermes-pet-20e9b.appspot.com/o/photo5818882831936501257.jpg?alt=media&token=1309b2b6-b5cd-49e1-84bc-5060c4594d65"
  },
  {
      id: 1,
      name: "Bismark",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      liked: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/hermes-pet-20e9b.appspot.com/o/photo5818882831936501258.jpg?alt=media&token=e542615e-8fd0-4a36-9bcf-4fab162033bb"
  },
  {
      id: 2,
      name: "Leonard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      liked: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/hermes-pet-20e9b.appspot.com/o/photo5818882831936501259.jpg?alt=media&token=c3179708-44b3-4a17-a60a-ab53edf82e26"
  },
]

export const Profile = () => {
  const { currentProfile } = useContext(ProfileContext);

  const profile = petsInfoProto[currentProfile];

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
      <LikeBtn isLiked={ profile.liked } callback={()=>alert("liked")}/>
    </View>
  );
}
  
