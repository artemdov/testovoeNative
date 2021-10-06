import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const MedicationDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.medicationDetailsContainer}>
      <Text style={styles.medicationDetailsTitle}>ANALGIN</Text>
      <Text style={styles.medicationDetailsTitle}>12:03</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  medicationDetailsContainer: {
    marginVertical: '30%',
    marginHorizontal: 50,
    borderWidth: 2,
  },
  medicationDetailsTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 30,
  },
});
