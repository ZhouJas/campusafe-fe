import * as React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useForm } from "react-hook-form";
import { Text, View } from '../components/Themed';

export default function ReportSubmitted({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
      console.log(data)
      navigation.navigate('TabTwo')
    }
    const onHome = (data: any) => {
        console.log(data);
        navigation.navigate('TabOne')
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Report Submitted</Text>
        <Image style={styles.image} source={require('../assets/images/reportConfirmation.png')}></Image>
      <TouchableOpacity onPress={onSubmit} style={styles.submit}>
        <Text style={styles.submitText}>Create Another</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHome} style={styles.homeSubmit}>
        <Text style={styles.submitText}>Back to Home</Text>
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
    color: 'black',
    fontSize: 35,
    marginBottom:40
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
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:10,
  },
  submitText: {
    fontSize: 20,
    color: 'beige'
  },
  content: {
    fontSize: 20, 
    textAlignVertical: 'top',
    paddingTop:10,
    color: 'darkgrey',
    flexWrap: 'wrap',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 40,
    paddingLeft: 10,
    width: 300,
    height: 200
  },
  image: {
    marginBottom:40,
  },
  homeSubmit: {
    backgroundColor: '#BABABA',
    width:300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius:10,
}
});
