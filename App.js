import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#f5cb42',
        color: '#329ba8',
        alignItems: "center",
        fontweight: 'bold',
        fontsize: '2.5rem'
      }}>
      <Text>Hello, world!</Text>
      <Text>This is my first react-native app!</Text>
      
    </View>
  )
}
export default HelloWorldApp;