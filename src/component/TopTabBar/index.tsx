//import liraries
import React, {Fragment, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TOP_MENU_DATA} from '../../constant/constant';

// create a component
const TopTabBar = () => {
  const [selectedTab, setSelectedTab] = useState('Chart');
  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        {TOP_MENU_DATA.map((tab, index) => (
          <Fragment key={index}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTab,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>

            {TOP_MENU_DATA.length - 1 !== index && (
              <Text style={styles.divider}>|</Text>
            )}
          </Fragment>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
  },
  activeTab: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
  },
  divider: {
    color: '#FFFFFF',
    marginHorizontal: '2%',
  },
});

//make this component available to the app
export default TopTabBar;
