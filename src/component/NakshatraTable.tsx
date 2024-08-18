//import liraries
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SectionHeader from './SectionHeader';
import {PLANETS_TAB_DATA, PLANETS_TABLE_DATA} from '../constant/constant';
import CustomTab from './CustomTab';
import {Colors} from '../constant/theme';
import LinearGradient from 'react-native-linear-gradient';

type PlanetDataType = {
    planet: String;
    sign: String;
    signLord: String;
    degree: String;
    house: number;
  };
  type PlanetDataItem = {
    item: PlanetDataType;
  };
  
// create a component
const NakshatraTable = () => {
  const renderRow = ({item}: PlanetDataItem) => (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text numberOfLines={1} style={styles.text}>
          {item.planet}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.cell}>
        <Text numberOfLines={1} style={styles.text}>
          {item.sign}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.cell}>
        <Text numberOfLines={1} style={styles.text}>
          {item.signLord}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.cell}>
        <Text numberOfLines={1} style={styles.text}>
          {item.degree}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.cell}>
        <Text numberOfLines={1} style={styles.text}>
          {item.house}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionHeader title="Planets" />
      <CustomTab data={PLANETS_TAB_DATA} />

      {/* Header Row */}
      <View style={[styles.row, styles.borderStyle]}>
        <View style={[styles.header]}/>
        <View style={styles.cell}>
          <Text style={styles.headerText}>Planet</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cell}>
          <Text style={styles.headerText}>Sign</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cell}>
          <Text style={styles.headerText}>Sign Lord</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cell}>
          <Text style={styles.headerText}>Degree</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cell}>
          <Text style={styles.headerText}>House</Text>
        </View>
      </View>

      {/* Data Rows */}
      <View>
      <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.primary.primary, Colors.primary.primary1]}
            style={styles.topHeaderStyle}
          />
      <FlatList
        data={PLANETS_TABLE_DATA}
        renderItem={renderRow}
        contentContainerStyle={styles.borderStyle}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderStyle: {borderTopStartRadius: 16, borderTopEndRadius: 16},
  header: {
    backgroundColor: '#3F4940',
    ...StyleSheet.absoluteFillObject,
    opacity:0.5,
    borderTopStartRadius: 16, borderTopEndRadius: 16
  },
  cell: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#555',
  },
  text: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: Colors.primary.white,
  },
  headerText: {
    paddingVertical: 10,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: Colors.primary.white,
  },
  topHeaderStyle: {
    ...StyleSheet.absoluteFillObject,
    borderBottomEndRadius: 16,
    borderBottomLeftRadius: 16,
    opacity:0.5
  },
});

//make this component available to the app
export default NakshatraTable;
