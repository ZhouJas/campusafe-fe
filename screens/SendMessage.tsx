import * as React from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RootTabScreenProps } from '../types';


import { useForm, Controller } from "react-hook-form";

import { Text, View } from '../components/Themed';

export default function SendMessage({navigation}) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data: any) => {console.log(data); navigation.navigate('BottleSuccess'); reset();}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
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
            placeholder="e.g. HTN"
          />
        )}
        name="firstName"
        defaultValue=""
      />
      <Text style={styles.title}>Tag </Text>
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
            placeholder="Select Tag"
          />
        )}
        name="lastName"
        defaultValue=""
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
            placeholder="Enter content here. Careful! Please don't input any personal information"
            multiline = {true}
          /> 
        )}
        name="lastName"
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
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#f7f2e9'
  },
  title: {
    
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 30
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
    width: 300,
    height: 300
  }
});
