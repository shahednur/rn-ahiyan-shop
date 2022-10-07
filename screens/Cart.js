import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/COLORS'

const Cart = () => {
  return (
    <View style={styles.view}>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  view:{
    flex:1,
    position: 'relative',
    backgroundColor: COLORS.bgColor,
  },
  screen: {
    position: 'relative',
  },
  list: {
    paddingHorizontal: 15,
    transform: [{ translateY: 90 }]
  }
});