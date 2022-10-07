import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UiText from '../components/UI/Text';
import COLORS from '../constants/COLORS';

const Profile = () => {
  return (
    <View style={styles.screen}>
      <UiText style={styles.subHeading}>Profile</UiText>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ae3d34'
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.textColorLight,
  },
});