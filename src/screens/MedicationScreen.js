import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {screenNames} from '../navigation/screenNames';

export const MedicationScreen = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [isSecondSelected, setSecondSelection] = useState(false);

  const onPressMedicalDetail = () =>
    navigation.navigate(screenNames.MEDICATION_DETAILS_SCREEN);

  return (
    <SafeAreaView>
      <View style={styles.medicationContainer}>
        <Text style={styles.medicationTitle}>Medication</Text>
        <View style={[styles.wrapperDetailsTitle, styles.tableLine]}>
          <TouchableOpacity onPress={onPressMedicalDetail}>
            <Text style={styles.medicationDetailsTitle}>12:03 analgin</Text>
          </TouchableOpacity>
          <CheckBox value={isSelected} onValueChange={setSelection} />
        </View>
        <View style={styles.wrapperDetailsTitle}>
          <TouchableOpacity>
            <Text style={styles.medicationDetailsTitle}>09:00 aspirin</Text>
          </TouchableOpacity>
          <CheckBox
            value={isSecondSelected}
            onValueChange={setSecondSelection}
          />
        </View>
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
  medicationContainer: {
    margin: 50,
    borderWidth: 2,
  },
  medicationDetailsTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  medicationTitle: {
    fontSize: 22,
    textAlign: 'center',
    borderBottomWidth: 2,
  },
  wrapperDetailsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  tableLine: {
    borderBottomWidth: 2,
  },
});
