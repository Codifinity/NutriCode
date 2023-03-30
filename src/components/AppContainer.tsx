import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </NavigationContainer>
  );
}
