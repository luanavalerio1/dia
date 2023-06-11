import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigation } from './drawer.navigation';
type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Drawer: undefined;
};
type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigation
}

export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}