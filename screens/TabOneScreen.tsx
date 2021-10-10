import * as React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const {handleSubmit} = useForm();
  const [markers, updateMarkers] = React.useState(
    [{
      key:"dire",
      coordinate: { latitude : 43.470341 , longitude : -80.544057 },
      title:"Assault",
      time: "3:13am"
    },]
  );
  let limit = 1
  const updateMap = () => {
    updateMarkers([{
      key:"dire",
      coordinate: { latitude : 43.470341 , longitude : -80.544057 },
      title:"Assault",
      time: "3:13am"
    },
    {
      key:"dire2",
      coordinate: { latitude : 43.4718067 , longitude : -80.5490869 },
      title:"Incident",
      time: "4:17am"
    },])
  }

  return (
    <View style={styles.container}>
              <Text style={styles.title}>Incident Map</Text>
      <Text style={styles.text}>The map below shows the incidents that were reported in the past week. Click on each individual marker to learn more.</Text>
      <MapView
      
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
        latitude: 43.4723,
        longitude: -80.5449,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
    }}> 
    {markers.map(marker => {
      return <Marker 
      key={marker.key}
      coordinate={{latitude : marker.coordinate.latitude, longitude : marker.coordinate.longitude}} 
        title={marker.title}
        description={marker.time}/>
    })}
    
  </MapView>
      <TouchableOpacity onPress={handleSubmit(updateMap)} style={styles.update}>
        <Text style={styles.updateText}>Update Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f2e9'

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map:{
    width: 300,
    height: 400,
    marginVertical: 20,
    borderWidth: 20,
  },
  text:{
    marginHorizontal:20,
    fontSize: 15,
    textAlign: 'center'
  },
  update: {
    width:300,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:10,
  },
  updateText:{
    fontSize: 18,
    color:'beige'
  },
});
