import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, TextInput, TouchableOpacity } from 'react-native';

const backgroundColor = "#75bd51";
const logo = require("/src/assets/images/Logo.png");

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} backgroundColor={backgroundColor}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View> 
        <View style={styles.inputContainer}>
          <Text style={styles.Text}>Username</Text> 
          <TextInput style={[styles.input, { color: 'black' }]} placeholder="Username" placeholderTextColor="#0000" />
          <Text style={styles.Text}>Password</Text> 
          <TextInput style={[styles.input, { color: 'black' }]} placeholder="Password" placeholderTextColor="#0000" secureTextEntry={true} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>  
          </TouchableOpacity>  
          <TouchableOpacity style={styles.register}>
            <Text style={styles.registerText}>Daftar</Text>  
          </TouchableOpacity> 
        </View> 
      </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75bd51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 100,
  },
  logo :{
    width: 300,
    height: 100,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    paddingvertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffff',
    borderRadius: 5,
    color: '#0000',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#4a4a4a',
    borderRadius: 10,
  },
  buttonText: {
    color: '#00000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  register: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 5,
  },
});
