import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Profile = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>INDINSIDSNIDNSO</Text>
        <Button
                title="Go to Profile"
                onPress={() => navigation.push('Profile')}
            />
        <StatusBar style="auto" />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});