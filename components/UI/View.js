import React, { Children } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import COLORS from '../../constants/COLORS';

const UiView = ({ Children, style }) =>{
    return(
        <View style={{ ...Styles.screen}}>
            <ScrollView style={{ ...Styles.container, ...style}}>
                {Children}
            </ScrollView>
        </View>
    )
};

const Styles = StyleSheet.create({
    screen:{
        backgroundColor: COLORS.bgColor,
        position: 'relative',
        flex:1,
    },
    container:{
        width: '100%',
    }
});

export default UiView;