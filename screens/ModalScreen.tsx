import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Welcome to CampuSafe!</Text>
      <Text style={styles.subheader}>Here are some links and helplines to improve your mental health.</Text>
      <View style={styles.linkview}>
          <TouchableOpacity style={styles.links} onPress={ ()=>{ Linking.openURL('https://uwaterloo.ca/campus-wellness/')}}>
            <Text style={styles.linktext}>Campus Wellness</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.links} onPress={ ()=>{ Linking.openURL('https://uwaterloo.ca/campus-wellness/health-services')}}>
            <Text style={styles.linktext}>Health Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.links} onPress={ ()=>{ Linking.openURL('https://uwaterloo.ca/campus-wellness/counselling-services')}}>
            <Text style={styles.linktext}>Counselling Services</Text>
          </TouchableOpacity>
      </View>
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
  subheader: {
    fontSize: 18,
    padding: 20
  },
  links: {
    width:300,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 8
  },
  linktext: {
    fontSize: 20,
    color: 'beige'
  },
});
