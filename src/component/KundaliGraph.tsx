//import liraries
import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {Kundali} from '../utils/image';
import {Colors} from '../constant/theme';
import {Canvas, matchFont, Text, useFonts} from '@shopify/react-native-skia';

type KundaliGraphType = {
  data: string[];
};

function maintainAspectRatio(newWidth: number) {
  const originalWidth = 379;
  const originalHeight = 236;
  const newHeight = (originalHeight / originalWidth) * newWidth;
  return newHeight;
}

// create a component
const KundaliGraph = ({data}: KundaliGraphType) => {
  const {width} = useWindowDimensions();
  const newWidth = width - 48;

  const fontMgr = useFonts({
    Poppins: [require('../../assets/fonts/Poppins-Regular.ttf')],
  });

  if (!fontMgr) {
    return null;
  }
  const fontStyle = {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
  } as const;
  const font = matchFont(fontStyle, fontMgr);
  const newHeight = maintainAspectRatio(newWidth);
  const centerX = newWidth / 2 - 8;
  const centerY = newHeight / 2 - 10;

  const charDis = newWidth * 0.09;
  const smallDis = newWidth * 0.04;
  const largeDis = newWidth * 0.12;

  const xlargeDis = newWidth * 0.19;

  //  "Ma", "Ke", "Me", "Su", "Ju", "Mo", "Ve", "Sa", "Ra", "1", "7", "4","8", "9","5", "11","6","3","2"
  //   "Ve", "Sa"

  return (
    <View style={[styles.container, {width: newWidth, height: newHeight}]}>
      <Kundali width={newWidth} height={newHeight} />
      {/* Overlay Text */}
      <Canvas style={{...StyleSheet.absoluteFillObject}}>
        <Text
          text={data?.[10] ?? ''}
          y={centerY}
          x={centerX}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[12] ?? ''}
          y={centerY - xlargeDis}
          x={centerX - xlargeDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[14] ?? ''}
          y={centerY}
          x={centerX * 2 - charDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[5] ?? ''}
          y={centerY - largeDis}
          x={centerX * 2 - largeDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[17] ?? ''}
          y={centerY + charDis}
          x={centerX * 2 - charDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[14] ?? ''}
          y={centerY}
          x={centerX * 2 - charDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[18] ?? ''}
          y={centerY * 2}
          x={centerX + charDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[19] ?? ''}
          y={centerY * 2}
          x={centerX - charDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[4] ?? ''}
          y={centerY * 2}
          x={centerX / 2 - smallDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[3] ?? ''}
          y={centerY * 2}
          x={centerX / 2 - charDis - 5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[2] ?? ''}
          y={centerY * 2 - charDis}
          x={8}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[13] ?? ''}
          y={centerY}
          x={charDis + 5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[15] ?? ''}
          y={centerY + charDis}
          x={charDis + 5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[1] ?? ''}
          y={centerY + smallDis}
          x={centerX / 2 - 20}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[21] ?? ''}
          y={centerY * 2 - largeDis}
          x={centerX - charDis}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[22] ?? ''}
          y={centerY * 2 - largeDis}
          x={centerX - 5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[20] ?? ''}
          y={centerY + smallDis}
          x={centerX - charDis+5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[11] ?? ''}
          y={centerY + smallDis}
          x={centerX + charDis-5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[8] ?? ''}
          y={centerY + smallDis}
          x={centerX + largeDis + 5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[9] ?? ''}
          y={centerY + charDis}
          x={centerX}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[0] ?? ''}
          y={centerY - charDis - 5}
          x={centerX - charDis - 5}
          font={font}
          color={Colors.primary.white}
        />
        <Text
          text={data?.[16] ?? ''}
          y={centerY - xlargeDis}
          x={centerX + xlargeDis}
          font={font}
          color={Colors.primary.white}
        />
      </Canvas>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default KundaliGraph;
