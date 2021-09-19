import * as React from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


import { useForm, Controller } from "react-hook-form";

import { Text, View } from '../components/Themed';

export default function SendMessage({navigation}) {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data: any) => {
      console.log(data); 
			const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
			};
			fetch('http://142.93.149.113/bottles', requestOptions)
        .then(response => response.json())
        .then((data) => console.log('This is your data', data));
      console.log("past http request");
      navigation.navigate('BottleSuccess'); 
      reset();
    }
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
      {label: 'Goose', value: 'Goose'},
      {label: 'Animals', value: 'Animals'},
      {label: 'Food', value: 'Food'},
      {label: 'Feeling Good', value:'Feeling Good'},
      {label: 'Vent', value: 'Vent'},
      {label: 'Sad', value: 'Sad'},
    ]);
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
        name="title"
        defaultValue=""
      />
      <Text style={styles.title}>Tag </Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={() => (
          <DropDownPicker
          style={styles.dropdown}
          textStyle={{fontSize: 20, 
            color: 'black',}}
            dropDownContainerStyle={{
              width: 300,
              alignSelf:'center'
            }}
          multiple={true}
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
        name="tag"
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
        name="content"
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
  dropdown:{
    
    alignSelf: 'center',
    borderColor: 'black',
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingLeft: 10,
    width: 300,
    height: 50,
    borderRadius: 0
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
