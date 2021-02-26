import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useSelector } from 'react-redux';

import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

  const handleChecked = () => {
    setSelection(!isSelected);
  };

  const breweryTypes = useSelector(store => store.brewery.brewery.breweryTypes);
  console.log('component', breweryTypes);

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the landing page</Text>
      {!breweryTypes ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* Use ternary depending on platform Platform.OS === iOs or something*/}

          {breweryTypes.map(type => (
            <CheckBox
              key={type}
              title={type.brewery_type}
              style={styles.checkBoxIos}
              checked={isSelected}
              onPress={handleChecked}
            />
          ))}
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Result')}
      >
        <Text>Click here</Text>
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
