import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Main from './screens/Main';
import ScanScreen from './screens/ScanScreen';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Main: undefined;
  Product: undefined;
  Scan: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Main}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
