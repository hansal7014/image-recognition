import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  landingPageContent: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between'
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: "cover",
    position: "absolute"
  },
  logo: {
    width: 595 / 2.75,
    height: 842 / 2.75,
    justifyContent: 'flex-start'
  },
  darker: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1
  },
  loginButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 2,
    paddingBottom: 10,
    paddingStart: 26,
    paddingEnd: 26,
    marginBottom: 10,
    shadowRadius: 5,
    shadowColor: 'rgba(0,0,0,0.7)',
    borderRadius: 50,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 5
  },
  signupButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    paddingTop: 2,
    paddingBottom: 10,
    paddingStart: 26,
    paddingEnd: 26,
    shadowRadius: 5,
    shadowColor: 'rgba(0,0,0,0.7)',
    borderRadius: 50,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 5
  },
  buttonText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 36,
    textAlign: "center",
    textAlignVertical: "center",
    color: 'white'
  },
  buttons: {
  }
});

class LandingPage extends Component {
  render() {
    return (
      <ImageBackground source={require('./android/app/src/main/res/background.png')} style={styles.backgroundImage} blurRadius={2}>
        <View style={styles.darker} >
          <View style={styles.landingPageContent}>
            <Image source={require('./android/app/src/main/res/logo.png')} style={styles.logo} />
            <View style={styles.buttons}>
              <View style={styles.loginButton}>
                <Text style={styles.buttonText}>I have an account</Text>
              </View>
              <View style={styles.signupButton}>
                <Text style={styles.buttonText}>I don't have an account</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LandingPage;
