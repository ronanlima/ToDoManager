import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, SafeAreaView, KeyboardAvoidingView, Image, Alert} from 'react-native'
import {createUserOnFirebaseAsync} from '../services/firebaseApi'

const img = require('../assets/icone-todolist.png');

class Register extends Component {
    static navigationOptions = {
        title: 'Register'
    };

    state = {
        email: '',
        senha: ''
    }

    async _createUserAsync() {
        try {
            const user = await createUserOnFirebaseAsync(this.state.email, this.state.senha);
            Alert.alert(`User created!`, `User ${user.email} has succesfuly been created!`,[{
                text: 'Ok', onPress:() => {
                    this.props.navigation.goBack();
                }
            }]);
        } catch (error) {
            Alert.alert(`Create user failed!`, error.message);
        }
    };

    render() {
        return (
            <>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView style={styles.container} behavior='padding'>
                        <View style={styles.topView}>
                            <Image style={styles.img} source={img} />
                            <Text style={styles.title}>Cadastro</Text>
                        </View>
                        <View style={styles.bottomView}>
                            <TextInput style={styles.input}
                                placeholder='E-mail'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={email => this.setState({email})} />
                            <TextInput style={styles.input}
                                placeholder='Senha'
                                secureTextEntry={true}
                                onChangeText={senha => this.setState({senha})} />
                            <Button title='Registrar' onPress={() => {this._createUserAsync()}} />
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </>
        );
    };
    
};

const distancia = 20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    topView: {
        flex: 0.20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25
    },
    img: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginStart: 20
    },
    bottomView: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: distancia,
        paddingLeft: distancia,
        paddingEnd: distancia,
        paddingStart: distancia
    },
    input: {
        marginBottom: distancia
    }
});

export default Register;