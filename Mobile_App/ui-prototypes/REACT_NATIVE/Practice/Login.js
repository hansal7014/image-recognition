import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, ToastAndroid, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends React.Component {

    forgot_password_press = () => {
        ToastAndroid.show('forgot my password!', ToastAndroid.SHORT);
    }

    render() {
        return (
            <ImageBackground source={require('./android/app/src/main/res/background.png')} style={styles.backgroundImage} blurRadius={5}>
                <View style={styles.darker} >
                    <View style={styles.loginPageContent}>
                        <Image source={require('./android/app/src/main/res/logo.png')} style={styles.logo} style={styles.logo} />

                        <TextInput style={styles.userNameInputField} placeholder={'username'} textContentType={'username'} />
                        <TextInput style={styles.passwordInputField} placeholder={'password'} textContentType={'password'} secureTextEntry={true} />

                        <TouchableHighlight style={styles.buttonPress} onPress={this.forgot_password_press}>
                            <View style={styles.helpButton}>
                                <Text style={styles.buttonText}>forgot password?</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    loginPageContent: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start'
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: "cover",
        position: "absolute"
    },
    logo: {
        top: 10,
        marginBottom: 50,
        width: 595 / 6,
        height: 842 / 6,
        justifyContent: 'flex-start'
    },
    darker: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1
    },
    userNameInputField: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingTop: 2,
        paddingBottom: 10,
        paddingStart: 26,
        paddingEnd: 26,
        marginBottom: 20,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.7)',
        borderRadius: 50,
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 5,
        fontFamily: 'Quicksand-Regular',
        fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white'
    },
    passwordInputField: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingTop: 2,
        paddingBottom: 10,
        paddingStart: 26,
        paddingEnd: 26,
        marginBottom: 30,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.7)',
        borderRadius: 50,
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 5,
        fontFamily: 'Quicksand-Regular',
        fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white'
    },
    textInputPrompt: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white'
    },
    helpButton: {
        backgroundColor: 'rgba(255,0,0,0.4)',
        paddingTop: 2,
        paddingBottom: 10,
        paddingStart: 20,
        paddingEnd: 20,
        marginBottom: 10,
        marginLeft: 200,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.7)',
        borderRadius: 50,
        borderColor: 'rgba(255,0,0,0.4)',
        borderWidth: 5
    },
    buttonPress: {

    },
    buttonText: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white'
    }
});

export default Login;