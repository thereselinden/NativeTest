import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { singleBrewery } from '../reducer/brewery';

const BreweryDetailPage = ({ route }) => {
  const { breweryId } = route.params;
  const dispatch = useDispatch();
  const brewery = useSelector(store => store.brewery.brewery.singleBrewery);

  useEffect(() => {
    dispatch(singleBrewery(breweryId));
  }, [breweryId]);

  return (
    <SafeAreaView>
      <Text>Name: {brewery.name}</Text>
      <Text>City: {brewery.city}</Text>
      <Text>State: {brewery.state}</Text>
      <Text>Type of brewery: {brewery.brewery_type}</Text>
      <Text>Visit website: {brewery.website_url}</Text>
    </SafeAreaView>
  );
};
export default BreweryDetailPage;
