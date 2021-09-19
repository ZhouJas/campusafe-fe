import * as React from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Text, View } from '../components/Themed';
import { BottleMessage } from './BottleMessage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ReadMessage() {
const { control, formState: { errors }} = useForm();
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Filter</Text>
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
            placeholder="Select Tag(s)"
          />
        )}
        name="tags"
        defaultValue=""
      />
      <View style={styles.cardContainer}>
        <BottleMessage style={styles.card} title='Geese' tags={['Animals']} details='I saw geese crossing the street'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f2e9',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
    paddingLeft: 35,
    alignSelf: 'flex-start'
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
  card: {
    width: 340,
    height: 150,
  },
  cardContainer: {
      alignItems: 'center',
      backgroundColor: '#f7f2e9'
  }
});
