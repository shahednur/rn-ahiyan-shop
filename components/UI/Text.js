import React from 'react';
import { StyleSheet, Text } from 'react-native';

const UiText = ({ children, style }) =>{
  <Text style={{ ...Styles.text, ...style }}>{children}</Text>
};

const Styles = StyleSheet.create({
    text:{
        fontSize: 25,
    },
});

export default UiText;