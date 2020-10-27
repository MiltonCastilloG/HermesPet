import React from 'react';
import { StyleSheet } from 'react-native';
import { ProfileList } from './src/scenes/ProfileList';
import { Profile } from './src/scenes/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="ProfileList">
        <Stack.Screen name="ProfileList" component={ProfileList} />
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
});