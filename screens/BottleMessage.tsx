import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export function BottleMessage(props) {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{ props.title }</Text>
                <Text style={styles.tag}>Tag(s): {props.tags}</Text>
                <Text style={styles.details}>{props.details}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: 340,
        height: 150,
        padding: 10,
        borderRadius: 10
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
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