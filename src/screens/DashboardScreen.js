import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <FontAwesome style={styles.userImage} name="user-o" size={70} />
        <Text style={styles.textMessage}>Good morning, User</Text>
      </View>
      <View style={styles.textSymptomsContainer}>
        <Text style={styles.textSymptomsTitle}>Messages</Text>
        <Text style={styles.textSymptomsDescription}>No symptoms today</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  userImage: {
    margin: 12,
  },
  textMessage: {
    fontSize: 20,
    marginTop: 24,
    marginHorizontal: 12,
  },
  textSymptomsContainer: {
    margin: 50,
    borderWidth: 2,
  },
  textSymptomsDescription: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 50,
  },
  textSymptomsTitle: {
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
  },
});
