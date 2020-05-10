import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {TaskListView} from '../components/Components';
import {readTaskFromFirebaseAsync} from '../services/firebaseApi';

const imgDone = require('../assets/icon-done-light.png');

export default class DoneTasks extends Component {
    state = {
        tasks: [],
    };

    componentDidMount() { 
        readTaskFromFirebaseAsync(this._fetchTasks.bind(this));
    }
    _fetchTasks(tasks) {
        const tasksToDo = tasks.filter(t => t.isDone); 
        this.setState({tasks: tasksToDo});
    }

    render() {
        return (
            <View style={ styles.conteiner }> 
                <TaskListView tasks={this.state.tasks} />
            </View>
        );
    }
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