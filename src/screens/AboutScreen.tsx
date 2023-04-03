import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>O Aplikacji</Text>
      <Text>
        Aplikacja <Text style={{ fontWeight: 'bold' }}>NutriCode</Text>
      </Text>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Autorzy:</Text>
        <TouchableOpacity
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
      </Text>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '900'
  }
});
