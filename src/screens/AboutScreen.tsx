import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/NutriCodeLogo.png')} />
      <Text style={styles.heading}>O Aplikacji</Text>
      <Text>
        Aplikacja <Text style={{ fontWeight: 'bold' }}>NutriCode</Text>
      </Text>
      <View style={styles.authors}>
        <Text style={{ fontWeight: 'bold' }}>Autorzy:</Text>
        <TouchableOpacity
          style={styles.authors}
          onPress={() =>
            WebBrowser.openBrowserAsync('https://github.com/maciejpieczarka')
          }
        >
          <Text>Maciej Pieczarka, </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            WebBrowser.openBrowserAsync('https://github.com/mateuszsamin')
          }
        >
          <Text>Mateusz Samin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.authors}>
        <Text style={{ fontWeight: 'bold' }}>Kod aplikcaji:</Text>
        <TouchableOpacity
          style={styles.authors}
          onPress={() =>
            WebBrowser.openBrowserAsync('https://github.com/Codifinity/NutriCode')
          }
        >
          <Text>Codifinity/NutriCode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  heading: {
    fontSize: 24,
    fontWeight: '900'
  },
  authors: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
});
