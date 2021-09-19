import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export function BottleMessage(props) {
    const value = props.value;
    const tags = props.tags;
    if(tags.includes(value) || value == null) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{ props.title }</Text>
                <Text style={styles.tag}>Tag(s): {props.tags.map(tag => tag+', ')}</Text>
                <Text style={styles.details}>{props.details}</Text>
            </View>
        )
    } else {
        return <View></View>;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: 340,
        height: 150,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    tag: {
        fontStyle: 'italic',
        fontSize: 15,
        color: 'grey',
        marginBottom: 20,
    },
    details: {
        color: 'black',
        fontSize: 15
    }

});