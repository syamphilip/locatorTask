import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DisplayAllLoc() {
  const [Data, setData] = useState();

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('Key');
      setData(value);
    } catch (error) {
      // Error retrieving data
    }
  }, []);
  const renderItem = item => <Text>{item}</Text>;
  return (
    <View>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
}
