import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { allBreweries } from '../reducer/brewery';

const LandingPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(allBreweries());
  };

  const handleNavigation = () => {
    navigation.navigate('Filter');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing page - short description of this app</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleFilter();
          handleNavigation();
        }}
      >
        <Text>Go to filter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '100%',
    padding: 10,
  },
});
