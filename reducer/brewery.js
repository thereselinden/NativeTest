import { createSlice } from '@reduxjs/toolkit';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//WHERE DO WE USE THIS? TO REMOVE ERROR IN SIMULATOR
//COULD BE A PROBLEM LATER
import { ALLBREWERIES } from '../URLs/urls';

const initialState = {
  brewery: {
    breweryList: [],
    breweryTypes: [],
  },
};

//____REDUCERS
export const brewery = createSlice({
  name: 'brewery',
  initialState,
  reducers: {
    setBreweries: (store, action) => {
      store.brewery.breweryList = action.payload;
    },
    setBreweryTypes: (store, action) => {
      store.brewery.breweryTypes = action.payload;
    },
  },
});

export const allBreweries = page => {
  return async dispatch => {
    try {
      const response = await fetch(`${ALLBREWERIES}?page=${page}`);
      const data = await response.json();
      dispatch(brewery.actions.setBreweries(data));
      // const BreweryTypes = data.map(data => {
      //   data.brewery_type;
      // });
      // console.log('thunk types', BreweryTypes);
      // const uniqueBreweryTypes = [...new Set(BreweryTypes)];
      // console.log('thunk unique', uniqueBreweryTypes);
      // dispatch(brewery.actions.setBreweryTypes(uniqueBreweryTypes));
    } catch (err) {
      console.log(err);
    }
  };
};
