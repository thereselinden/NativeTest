import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, Image } from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Hello World</Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300',
        }}
      />
    </SafeAreaView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 36,
    flexShrink: -1,
  },
});

//SafeAreaView - push below iphone frames , does not work for andriod.
//have to use terneries to define with OS platform we are styling for.

//console.log(useDimensions());
//to see size depending on portrait or landscape
//const { landscape } = useDeviceOrientation();

// import {
//   useDeviceOrientation,
//   useDimensions,
// } from '@react-native-community/hooks';
//Landscape and portrait direction. Default = portrait, can change app.json to default instead of portrait
//npm install i @react-native-community/hooks
//used if you allow multiply dimensions of the app.
