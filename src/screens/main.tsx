import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import ProfileScreen from './ProfileScreen';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { GestureResponderEvent } from 'react-native';
import ScanScreen from './ScanScreen';

const Tab = createBottomTabNavigator();

type TabBarBtn = {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomTabBarBtn = ({ children, onPress }: TabBarBtn) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#228572'
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#228572' : '#2F455C'
                }}
              />
              <Text
                style={{ color: focused ? '#228572' : '#2F455C', fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          headerShown: false,
          tabBarButton: props => <CustomTabBarBtn {...props} />,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/barcode.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#ffffff'
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../assets/user.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#228572' : '#2F455C'
                }}
              />
              <Text
                style={{ color: focused ? '#228572' : '#2F455C', fontSize: 12 }}
              >
                PROFILE
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default Main;
