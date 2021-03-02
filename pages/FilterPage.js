import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useSelector } from 'react-redux';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

const LandingPage = ({ navigation }) => {
  const [breweryType, setBreweryType] = useState();
  console.log(breweryType);

  const handleChecked = breweryType => {
    setBreweryType(!breweryType);
  };

  const handleNavigation = () => {
    navigation.navigate('Result');
  };

  const breweryTypes = useSelector(store => store.brewery.brewery.breweryTypes);
  console.log(breweryTypes);

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the filter page</Text>
      {!breweryTypes ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* Use ternary depending on platform Platform.OS === iOs or something*/}

          {breweryTypes.map(type => (
            <View style={styles.filterButton}>
              <Button
                key={type}
                title={type}
                style={styles.checkBoxIos}
                checked={breweryType}
                onPress={() => handleChecked(breweryType)}
              />
            </View>
          ))}
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text>Search breweries</Text>
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
  filterButton: {
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 4,
    backgroundColor: '#fff',
    width: '',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '100%',
    padding: 10,
  },
});
