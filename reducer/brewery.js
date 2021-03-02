import { createSlice } from '@reduxjs/toolkit';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//WHERE DO WE USE THIS? TO REMOVE ERROR IN SIMULATOR
//COULD BE A PROBLEM LATER
import { ALLBREWERIES } from '../URLs/urls';

const initialState = {
  brewery: {
    breweryList: [],
    breweryTypes: [],
    singleBrewery: {},
  },
};

//____REDUCERS
export const brewery = createSlice({
  name: 'brewery',
  initialState,
  reducers: {
    //all breweries
    setBreweries: (store, action) => {
      store.brewery.breweryList = action.payload;
    },
    setBreweryTypes: (store, action) => {
      store.brewery.breweryTypes = action.payload;
    },
    //one brewery
    setSingleBrewery: (store, action) => {
      store.brewery.singleBrewery = action.payload;
    },
  },
});

export const allBreweries = page => {
  return async dispatch => {
    try {
      const response = await fetch(`${ALLBREWERIES}?page=${page}`);
      const data = await response.json();
      dispatch(brewery.actions.setBreweries(data));
      const breweryTypes = data.map(type => type.brewery_type);
      const uniqueBreweryTypes = [...new Set(breweryTypes)];
      dispatch(brewery.actions.setBreweryTypes(uniqueBreweryTypes));
    } catch (err) {
      console.log(err);
    }
  };
};

export const singleBrewery = breweryId => {
  return async dispatch => {
    try {
      const response = await fetch(`${ALLBREWERIES}/${breweryId}`);
      const data = await response.json();
      dispatch(brewery.actions.setSingleBrewery(data));
    } catch (err) {
      console.log(err);
    }
  };
};
