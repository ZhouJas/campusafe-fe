import * as React from 'react';
import { TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabfourScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data)
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Send a Message</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabfourScreen.tsx" /> */}
      <Text style={styles.title}>First Name:</Text>
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
          />
        )}
        name="firstName"
        defaultValue="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text style={styles.title}>Last Name: </Text>
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
          />
        )}
        name="lastName"
        defaultValue="lastName"
      />

<Text style={styles.title}>Content</Text>
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
          />
        )}
        name="lastName"
        defaultValue="lastName"
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
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#f7f2e9'
  },
  title: {
    
    fontSize: 20,
    alignItems: 'flex-start',
    paddingLeft: 10
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
    alignItems: 'center'
  },
  submitText: {
    fontSize: 20,
    color: 'beige'
  },
  content: {
    fontSize: 20, 
    color: 'darkgrey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 40,
    paddingLeft: 10,
    width: 300,
    height: 100
  }
});
