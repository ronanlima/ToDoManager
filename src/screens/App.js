/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native'

const App = () => {
  return (
    <>
      <SafeAreaView testID='main' style={styles.container}>
        <View testID='first' style={styles.first}>
          <View style={styles.subview}/>
          <View style={styles.subview}/>
          <View style={styles.subview}/>
        </View>

        <View testID='second' style={styles.second}>
          <View style={styles.subview}/>
          <View style={styles.subview}/>
          <View style={styles.subview}/>
        </View>
      </SafeAreaView>
      {/* <View style={styles.container}>
        <Text style={styles.bigBlue}>Big blue</Text>
        <Text style={styles.smallRed}>Small red</Text>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column'
  },
  first: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    margin: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  second: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    margin: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  subview: {
    height: 50,
    width: 50, 
    backgroundColor: 'skyblue'
  },
  bigBlue: {
    color: 'blue',
    fontSize: 50
  },
  smallRed: {
    color: 'red',
    fontSize: 20
  }
});

export default App;
