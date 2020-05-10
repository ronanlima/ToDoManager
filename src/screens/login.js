import React, {Component, useState} from 'react'
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Button, Image, Alert} from 'react-native'
import {signInOnFirebaseAsync} from '../services/firebaseApi';
import {CommonActions} from '@react-navigation/native';

const img = require('../assets/icone-todolist.png');

const Login = (props) => {
    const [email, setEmail] = useState(props.email);
    const [senha, setSenha] = useState('');

    const signInAsync = async () => {
        try {
            const user = await signInOnFirebaseAsync(email, senha);
            Alert.alert(`User autenticated`,`User ${user.email} has successfuly been authenticated!`);
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'TaskList'}],
                }),
            );
        } catch (error) {
            Alert.alert(`Login failed`, error.message);
        }
    };

    return (
        <>
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img} />
                </View>
                <View styles={styles.bottomView}>
                    <TextInput style={styles.mInput}
                        placeholder='E-mail'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={text => setEmail(text)} />
                    <TextInput style={styles.mInput}
                        placeholder='Senha'
                        keyboardType='default'
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={password => setSenha(password)} />
                    <Button
                        title='Sign in'
                        onPress={() => signInAsync()} />
                    <View style={styles.textContainer}>
                        <Text>Não é um membro? Crie </Text>
                        <Text style={styles.textRegister} 
                            onPress={() => {
                                props.navigation.navigate('Register');
                            }}>
                            sua conta</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    img: {
        width: 200,
        height: 200
    },
    bottomView: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    },
    mInput: {
        marginBottom: 20
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister: {
        fontWeight: 'bold'
    }
});

export default Login;