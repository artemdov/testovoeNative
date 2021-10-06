import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';

const Router = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default Router;
