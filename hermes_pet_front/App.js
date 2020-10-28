import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ProfileList } from './src/scenes/ProfileList';
import { Profile } from './src/scenes/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileContext } from './src/contexts/ProfileContext'

const Stack = createStackNavigator();

const App = () => {
  //if the app was more complex I would use a reducer with an object context instead to treat all the states
  const [currentProfile, setCurrentProfile] = useState(undefined);

  const setProfile = id => setCurrentProfile(id);
  
  return (
    <ProfileContext.Provider value={{ currentProfile, setProfile }}>
      <NavigationContainer styles={styles.container}>
        <Stack.Navigator initialRouteName="ProfileList">
          <Stack.Screen
            name="ProfileList"
            component={ProfileList}
            options={{ 
              title: 'Hermes Pet',
              headerTitleStyle: {
                alignSelf: "center"
              }
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ 
              title: 'Hermes Pet',
              headerTitleStyle: {
                alignSelf: 'flex-end'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileContext.Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
  },
});