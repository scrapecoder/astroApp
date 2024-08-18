//import liraries
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Platform,
  StatusBar,
} from 'react-native';
import Header from '../../component/Header';
import TopTabBar from '../../component/TopTabBar';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constant/theme';
import KundaliGraph from '../../component/KundaliGraph';
import NakshatraTable from '../../component/NakshatraTable';
import KundaliDetailSection from '../../component/KundaliDetailSection';
import MovingCircle, {useLoop} from '../../component/MovingCircle';
import {Canvas, Fill} from '@shopify/react-native-skia';
import {HOROSCOPE_DATA} from '../../constant/constant';

// create a component
const HomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const progress = useLoop({duration: 5000});

  return (
    <View style={styles.linearGradient}>
      {/* Background canvas moving */}
      <Canvas style={{...StyleSheet.absoluteFillObject}}>
        <Fill color={Colors.primary.main} />
        <MovingCircle
          {...{progress}}
          yCord={20}
          position={[width * 2, -width / 1.5]}
        />
        <MovingCircle
          {...{progress}}
          yCord={height}
          position={[-width / 1.5, width * 2]}
        />
      </Canvas>

      {/* Top header view */}
      <View style={styles.topHeaderContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.primary.primary, Colors.primary.primary1]}
          style={styles.topHeaderStyle}
        />
        <Header />
        <TopTabBar />
      </View>

      {/* Scroll container start here */}
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 24}}
        showsVerticalScrollIndicator={false}>
        <KundaliGraph data={HOROSCOPE_DATA} />
        <NakshatraTable />

        <KundaliDetailSection />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    backgroundColor: Colors.primary.main,
    paddingTop: Platform.OS === "android"? StatusBar.currentHeight:0
  },
  topHeaderContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  topHeaderStyle: {
    ...StyleSheet.absoluteFillObject,
    borderBottomEndRadius: 9,
    borderBottomLeftRadius: 9,
    opacity: 0.5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  tableRowText: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

//make this component available to the app
export default HomeScreen;
