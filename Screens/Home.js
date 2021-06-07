import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import Geoloaction from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);
  const [Location, setLocation] = useState(null);

  const handleGetLocationPara = () => {
    Geoloaction.getCurrentPosition(data => {
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
      const stringData = 'Lat : ' + Latitude + ' | Long : ' + Longitude;
      try {
        AsyncStorage.mergeItem('Key', stringData);
      } catch (error) {
        alert(error);
      }
    });
  };

  const goToStore = () => {
    navigation.navigate('Location Store');
  };

  //To get loaction name,but my API is not working

  /*const getLocation = () => {
    Geocoder.init('AIzaSyAR7VG2FBuYqkUL7xzUvo2MS_7rUlI8KW4');
    Geocoder.from(41.89, 12.49)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];
        setLocation(addressComponent);
      })
      .catch(error => console.warn(error));
  };*/

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 60,
        alignItems: 'center',
      }}>
      <View
        style={{
          borderRadius: 2,
          borderColor: 'gray',
          justifyContent: 'flex-start',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'gray',
          padding: 20,
        }}>
        <Text>Latitude : {Latitude}</Text>
        <Text>Longitude : {Longitude}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <View style={{marginRight: 5}}>
          <Button title="Get Location" onPress={handleGetLocationPara} />
        </View>
        <View>
          <Button title="Get Stored Location" onPress={goToStore} />
        </View>
      </View>
    </View>
  );
}
