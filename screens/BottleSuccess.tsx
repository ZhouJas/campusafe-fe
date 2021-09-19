import * as React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function BottleSuccess({navigation}: RootStackScreenProps<'BottleSuccess'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message Sent</Text>
      <Image source={require('../assets/images/image 2.png')}/>
      <TouchableOpacity onPress={navigation.navigate('Root.TabFour')} style={styles.createAnother}>
        <Text style={styles.submitText}>Create Another</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigation.navigate('TabOneScreen')} style={styles.return}>
        <Text style={styles.submitText}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
