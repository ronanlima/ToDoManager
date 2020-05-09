import React, { Component } from 'react';
import {View, Image, StyleSheetView, Text, Button, TextInput, SafeAreaView} from 'react-native';

const imgCheckList = require('../assets/icon-done-normal.png');

export default class ToDoTasks extends Component {

    render() {
        return(
            <View style={styles.container} />
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    img: {
        width: 50,
        height: 50
    }
});