import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import ProductsScreen from './ProductsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Main;
