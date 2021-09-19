import * as React from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Text, View } from '../components/Themed';
import { BottleMessage } from './BottleMessage';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ReadMessage() {
const { control, formState: { errors }} = useForm();
const [open, setOpen] = React.useState(false);
const [value, setValue] = React.useState(null);
const [items, setItems] = React.useState([
  {label: 'Reset', value: null},
  {label: 'Goose', value: 'Goose'},
  {label: 'Animals', value: 'Animals'},
  {label: 'Food', value: 'Food'},
  {label: 'Feeling Good', value:'Feeling Good'},
  {label: 'Vent', value: 'Vent'},
  {label: 'Sad', value: 'Sad'},
]);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Filter</Text>
        <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={() => (
          <DropDownPicker
          style={styles.dropdown}
          textStyle={{fontSize: 20, 
            color: 'black'}}
            dropDownContainerStyle={{
              width: 340,
              alignSelf:'center'
            }}
            
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select tag(s)"
          mode="BADGE"
          showBadgeDot={false}
        />
        )}
        name="tags"
        defaultValue=""
      />
      <View style={styles.cardContainer}>
        <BottleMessage value={value} style={styles.card} title='Chungchun Rice Dogs' tags={['Food', 'Feeling Good']} details='A new rice dog place opened up in the University Plaza! It tastes amazing and I cant wait to go again! 10/10 would recommend.'/>
        <BottleMessage value={value} style={styles.card} title='Geese' tags={['Animals']} details='I saw geese crossing the street'/>
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
  },
  dropdown:{
    
    alignSelf: 'center',
    borderColor: 'black',
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 10,
    paddingLeft: 10,
    width: 340,
    height: 50,
    borderRadius: 0
  },
});