import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, ToDoTasks} from '../screens/screens';
import React from 'react';
// import { TaskTab } from './taskTabs';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator headerMode="screen">
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{headerShown: false}} />
            <Stack.Screen 
                name="Register"
                component={Register} />
            {/* <Stack.Screen
                name="TaskList"
                component={TaskTab} /> */}
        </Stack.Navigator>
    );
}

export default Routes;