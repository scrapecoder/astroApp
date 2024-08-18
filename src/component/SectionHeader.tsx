//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../constant/theme';

type SectionHeaderProps = {
    title:String
    style?:ViewStyle
}
// create a component
const SectionHeader = ({title,style}:SectionHeaderProps) => {
    return (
        <View style={[styles.container,style]}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
    },
    text:{
        color:Colors.primary.white,
        fontSize:17,
        fontWeight:'500',
        fontFamily:'Poppins-Medium'
    }
});

//make this component available to the app
export default SectionHeader;
