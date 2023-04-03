import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#238878', paddingTop: 20, height: 100}}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarActiveTintColor: '#4CA9EE',
        tabBarInactiveTintColor: 'white', tabBarIcon: ({focused, color, size}) => { return <Ionicons name={"home-outline"} size={size} color={color} />} }}
      />

      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: false, tabBarActiveTintColor: '#4CA9EE',
        tabBarInactiveTintColor: 'white', tabBarIcon: ({focused, color, size}) => { return <Ionicons name={"albums-outline"} size={size} color={color} />} }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarActiveTintColor: '#4CA9EE',
        tabBarInactiveTintColor: 'white', tabBarIcon: ({focused, color, size}) => { return <Ionicons name={"person-outline"} size={size} color={color} />}}}
      />
    </Tab.Navigator>

  );
};

export default Main;
