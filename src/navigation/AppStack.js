import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from '../screens/DashboardScreen';
import {screenNames} from './screenNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from "react-native-vector-icons/Fontisto";
import {MedicationScreen} from "../screens/MedicationScreen";
import {CalendarScreen} from "../screens/CalendarScreen";

const Tab = createBottomTabNavigator();
const notFocused = 0.51;

const dashboardTabBarIcon = ({focused}) => (
  <Ionicons
    style={{opacity: focused ? 1 : notFocused}}
    name="home-outline"
    size={24}
  />
);
const medicationTabBarIcon = ({focused}) => (
    <Fontisto
        style={{opacity: focused ? 1 : notFocused}}
        name="tablets"
        size={24}
    />
);
const calendarTabBarIcon = ({focused}) => (
    <Ionicons
        style={{opacity: focused ? 1 : notFocused}}
        name="calendar-outline"
        size={24}
    />
);

export const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screenNames.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          tabBarIcon: dashboardTabBarIcon,
        }}
      />
      <Tab.Screen
        name={screenNames.MEDICATION_SCREEN}
        component={MedicationScreen}
        options={{
          tabBarIcon: medicationTabBarIcon,
        }}
      />
      <Tab.Screen
        name={screenNames.CALENDAR_SCREEN}
        component={CalendarScreen}
        options={{
          tabBarIcon: calendarTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};
