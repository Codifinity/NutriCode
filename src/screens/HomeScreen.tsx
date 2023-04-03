import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { auth } from '../../firebase';
import type { RootStackParamList } from '..';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = ({
  navigation
}: {
  navigation: HomeScreenNavigationProp;
}) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('Login' as never);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/NutriCodeLogo.png')} />
        <Text style={styles.logoText}>NutriCode</Text>
      </View>
      <View style={styles.userBox}>
        <Text style={styles.userBoxText}>Cześć, {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          Aby zeskanować wybrany kod kreskowy produktu - naciśnij zielony
          przycisk na dole ekranu
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#228572',
    width: '30%',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#238878',
    borderWidth: 2
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutlineText: {
    color: '#238878',
    fontWeight: '700',
    fontSize: 16
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    marginBottom: 30,
    marginTop: 100
  },
  logoText: {
    fontSize: 30,
    fontWeight: '700'
  },
  userBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white'
  },
  userBoxText: {
    fontSize: 18,
    fontWeight: '500'
  },
  headers: {
    fontSize: 25,
    fontWeight: '500'
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    marginTop: 25
  },
  searchBox: {
    flexDirection: 'row',
    gap: 15,
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    marginTop: 10
  },
  searchInput: {
    fontSize: 20
  },
  productBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  },
  product: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  productText: {
    fontSize: 20
  },
  scanProduct: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CA9EE',
    paddingHorizontal: '8%',
    paddingVertical: '3%',
    borderRadius: 30,
    position: 'absolute',
    bottom: 20
  },
  scanProductText: {
    color: 'white'
  }
});
