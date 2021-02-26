import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import { brewery } from './reducer/brewery';

const Stack = createStackNavigator();
const reducer = combineReducers({ brewery: brewery.reducer });
const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LandingPage}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="Result" component={ResultPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
