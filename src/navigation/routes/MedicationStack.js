import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MedicationScreen} from '../../screens/MedicationScreen';
import {MedicationDetailsScreen} from '../../screens/MedicationDetailsScreen';
import {screenNames} from '../screenNames';
import {medicationDetailsOptions} from '../options';

const Stack = createStackNavigator();

export const MedicationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screenNames.MEDICATION_SCREEN}
      component={MedicationScreen}
      options={{...medicationDetailsOptions, title: 'medication'}}
    />
    <Stack.Screen
      name={screenNames.MEDICATION_DETAILS_SCREEN}
      component={MedicationDetailsScreen}
      options={medicationDetailsOptions}
    />
  </Stack.Navigator>
);
