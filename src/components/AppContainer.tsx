import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

type Props = {
  children: React.ReactNode;
};

export default function AppContainer(props: Props) {
  return <NavigationContainer>{props.children}</NavigationContainer>;
}
