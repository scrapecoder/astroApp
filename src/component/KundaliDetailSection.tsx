//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SectionHeader from './SectionHeader';
import CustomTab from './CustomTab';
import {KUNDALI_TAB_DATA, PERSONALITY_SECTION_DATA} from '../constant/constant';
import {Colors} from '../constant/theme';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const KundaliDetailSection = () => {
  return (
    <View style={styles.container}>
      <SectionHeader
        style={{marginTop: 30}}
        title="Understanding your Kundli"
      />
      <CustomTab data={KUNDALI_TAB_DATA} />

      {/* Descriptions */}
      <View style={styles.descriptionContainer}>
        {PERSONALITY_SECTION_DATA.map((section, index) => (
          <View key={index} style={styles.card}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.primary.primary, Colors.primary.primary1]}
            style={[styles.topHeaderStyle, index === 0 && {marginTop:0}]}/>
            <View key={index} style={styles.descriptionSection}>
              <Text style={styles.descriptionTitle}>{section}</Text>
              <Text style={styles.descriptionText}>
                Ascendant is one of the most sought concepts in astrology when
                it comes to predicting the minute events in your life. At the
                time of birth, the sign that rises in the sky is the person's
                ascendant. it helps in making predictions about the minute
                events, unlike your moon or sun sign that help in making weekly,
                monthly or yearly prediction for you. Your ascendant is Pisces.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionSection: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  descriptionTitle: {
    color: Colors.primary.white,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.primary.white,
  },
  card:{
    marginTop: 30,
  },
  topHeaderStyle: {
    ...StyleSheet.absoluteFillObject,
    opacity:0.5,
    borderRadius: 16,
  },
});

//make this component available to the app
export default KundaliDetailSection;
