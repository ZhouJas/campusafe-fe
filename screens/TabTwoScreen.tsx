import React, { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function TabTwoScreen() {
  const [text, onChangeText] = useState();
  const [date, setDate] = useState(new Date());
  const [dateMode, setMode] = useState('date');
  const [dateShow, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <DateTimePicker
              style={styles.date}
              testID="dateTimePicker"
              value={date}
              mode='date'
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
            <DateTimePicker
              style={styles.date}
              testID="dateTimePicker"
              value={date}
              mode='time'
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
          />
        </View>
        <View style={styles.desc}>
        <Text style={styles.title}>Description</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={6}
          onChangeText={onChangeText}
          placeholder="Please include any additional information"
          value={text}
        />
        </View>
        <Button
          style={styles.button}
          title="Submit"
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  dropdown: {
    flex: 1
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  desc: {
    flex: 1
  },
  title: {
    textAlign: 'left',
    marginHorizontal: 20,
    paddingVertical: 10
  },
  input: {
    height: 100,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 15,
  },
  button: {
  }
});
