//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constant/theme';
import LinearGradient from 'react-native-linear-gradient';

type CustomTabProps = {
  data: any[];
};
// create a component
const CustomTab = ({data}: CustomTabProps) => {
  const [activeTab, setSelectedTab] = useState();
  useEffect(() => {
    setSelectedTab(data[0])
  },[data])

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.map((item, index) => {
          const isSelected = activeTab === item;
          return (
            <TouchableOpacity key={index} onPress={() => setSelectedTab(item)}>
              <View
                style={[
                  styles.buttonContainer,
                  index !== 0 && styles.space,
                  isSelected && styles.activetab,
                ]}>
                {isSelected && (
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={[Colors.primary.seaColor, Colors.primary.seaColor2]}
                    style={styles.linearFill}
                  />
                )}
                <Text style={[styles.text,isSelected && styles.activeText ]}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical:20
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.primary.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  space: {
    marginLeft: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.primary.white,
    fontFamily: 'Poppins-Medium',
  },
  activetab: {
    borderWidth: 0,
  },
  linearFill: {
    ...StyleSheet.absoluteFillObject,
  },
  activeText:{
    color:Colors.primary.black
  }
});

//make this component available to the app
export default CustomTab;
