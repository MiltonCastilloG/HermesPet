import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { LikeBtn } from '../components/completes/LikeBtn';

const petsInfoProto = [
  {
      id: 0,
      name: "Katyusha",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      liked: false,
      photo: "https://i.insider.com/5484b33a6da8119577fbada9?width=700&format=jpeg&auto=webp"
  },
  {
      id: 1,
      name: "Bismark",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      liked: false,
      photo: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=700&format=jpeg&auto=webp"
  },
  {
      id: 2,
      name: "Leonard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      liked: false,
      photo: "https://i.insider.com/5484e527ecad04de4324638b?width=700&format=jpeg&auto=webp"
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
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgContainer: {
      width: '100%',
      height: '30%',
      borderBottomWidth: 5,
      borderBottomColor: '#4285f4',
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    textContainer: {
      alignContent: 'center'
    },
    name: {
      fontSize: 30,
    },
    description: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    likeBtn: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 10,
      bottom: 20,
      backgroundColor: "white",
      borderRadius: 50
  },
});