import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Router} from './src/navigation/Router';

export const App = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
