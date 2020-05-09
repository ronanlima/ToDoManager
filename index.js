import 'react-native-gesture-handler';
import {AppRegistry, SafeAreaView} from 'react-native';
import Routes from './src/services/routes';
import {name as appName} from './app.json';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {initializeFirebaseApi} from './src/services/firebaseApi';

const wrappedRoutes = () => {
    return(
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <Routes />
            </SafeAreaView>
        </NavigationContainer>
    );
};

// const Index = () => {
//     return <Login email='ronan.saleslima@gmail.com' />;
// };

AppRegistry.registerComponent(appName, () => {
    initializeFirebaseApi();
    return wrappedRoutes
});
