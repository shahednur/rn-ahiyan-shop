import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import COLORS from '../constants/COLORS';

const Products = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <UiView style={styles.screen}>
        <View style={styles.head}>
          <UiText style={styles.heading}>NativeShop</UiText>
          <UiText style={styles.subHeading}>A perfect shoppers stop</UiText>
        </View>
      </UiView>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    flex:1,
  },
  screen:{
    paddingTop: 50,
    backgroundColor: '#ed3de5',
  },
  head: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 25,
    color: COLORS.primaryColor,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.textColorLight,
  },
  empty: {
    minHeight: 60,
  },
});