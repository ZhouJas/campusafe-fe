import * as React from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen({ navigation }) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data: any) => {
      console.log(data)
      navigation.navigate('Report Submitted')
      reset();
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type of Incident</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="e.g. Public Indecency"
          />
        )}
        name="incidentType"
        defaultValue=""
      />
      <Text style={styles.title}>Location</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="e.g 123 Street Ave."
          />
        )}
        name="location"
        defaultValue=""
      />
      <Text style={styles.title}>Time</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="e.g Sep 18, 2021 7:20 AM"
          />
        )}
        name="time"
        defaultValue=""
      />

<Text style={styles.title}>Description</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.content}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Please include any additional information that would help us."
            multiline = {true}
          />
        )}
        name="description"
        defaultValue=""
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.submit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f7f2e9'
  },
  title: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 35
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
    width: 340,
    height: 50
  },
  submit: {
    width:340,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10

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
    width: 340,
    height: 200
  }
});
