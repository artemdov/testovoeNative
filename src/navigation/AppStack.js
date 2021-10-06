import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from '../screens/DashboardScreen';
import {screenNames} from './screenNames';
import {CalendarScreen} from '../screens/CalendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {headerOptions, medicationTitleOptions} from './options';
import {MedicationStack} from './routes/MedicationStack';

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
    <Tab.Navigator screenOptions>
      <Tab.Screen
        name={screenNames.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          ...headerOptions,
          title: 'dashboard',
          tabBarLabel: 'Dashboard',
          tabBarIcon: dashboardTabBarIcon,
        }}
      />
      <Tab.Screen
        name={screenNames.MEDICATION_STACK}
        component={MedicationStack}
        options={{...medicationTitleOptions, tabBarIcon: medicationTabBarIcon}}
      />
      <Tab.Screen
        name={screenNames.CALENDAR_SCREEN}
        component={CalendarScreen}
        options={{...headerOptions, tabBarIcon: calendarTabBarIcon}}
      />
    </Tab.Navigator>
  );
};
