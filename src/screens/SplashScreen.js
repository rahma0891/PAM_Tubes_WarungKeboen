import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import {Colors, Images, Fonts} from '../contants';//nanti dihapus
import warungKeboenLogo from '../assets/images/WarungKeboen.png';
import { Display } from '../utils';


const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        backgroundColor = {"#8BD272"}
        translucent
        />
        <Image 
        source={warungKeboenLogo}
        resizeMode="contain"
        style={styles.Image}
        />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
  },
  Image: {
    height: 250,
    width: 250,
  }
});

export default SplashScreen;