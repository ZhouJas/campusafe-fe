import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from "react-native";


import { useForm } from "react-hook-form";

import { Text, View } from '../components/Themed';

export default function TabfourScreen({navigation}) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const readMsg = () => {navigation.navigate('Read Message'); reset();}
    const sendMsg = () => { navigation.navigate('Send Message'); reset();}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What brings you here today?</Text>

      <TouchableOpacity onPress={handleSubmit(readMsg)} style={styles.submit}>
      <Image style={styles.image} source={require('../assets/images/image5.png')}/>
      <Text style={styles.submitText}>Read a message</Text>
      <Text style={styles.submitTextDescript}>Read anonymous messages by filtering specific tags.</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmit(sendMsg)} style={styles.submit}>
      <Image style={styles.image} source={require('../assets/images/image6.png')}/>
        <Text style={styles.submitText}>Send a message</Text>
        <Text style={styles.submitTextDescript}>Type what is on your mind and anonymously send it to the “sea”.</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#f7f2e9'
  },
  title: {
    fontSize: 23,
    marginBottom: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    fontSize: 20, 
    color: 'darkgrey',
    
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 300,
    height: 50
  },
  submit: {
    width:300,
    height: 220,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },
  submitText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center'

  },
  submitTextDescript: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 10,
    textAlign: 'center'

  }
});
