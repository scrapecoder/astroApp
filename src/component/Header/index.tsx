//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { BackIcon } from '../../utils/image';

// create a component
const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.row}>
            <BackIcon width={30} height={30}/>
            <Text style={styles.text}>Kundali</Text>
            </View>
            </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:20
    },
    text: {
        fontFamily:'Raleway-SemiBold',
       color:'#FFFFFF',
       fontWeight:'500',
       fontSize:18,
       lineHeight:21,
       marginLeft:8
    },
});

//make this component available to the app
export default Header;
