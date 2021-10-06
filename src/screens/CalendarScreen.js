import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calendar,Nothing here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: '50%',
  },
});
