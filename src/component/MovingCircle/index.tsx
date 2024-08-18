//import liraries
import React, {useEffect} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {
  Canvas,
  Circle,
  vec,
  Fill,
  LinearGradient as SLinearGradient,
  mix,
  BackdropFilter,
  Blur,
} from '@shopify/react-native-skia';

import {
  Easing,
  SharedValue,
  cancelAnimation,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '../../constant/theme';

export const useLoop = ({duration}: {duration: number}) => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {duration, easing: Easing.inOut(Easing.linear)}),
      -1,
      false,
    );
    return () => {
      cancelAnimation(progress);
    };
  }, [duration, progress]);
  return progress;
};

type MovingCircleProps = {
    position:number[]
    yCord:number
    progress:SharedValue<number>
}
// create a component
const MovingCircle = ({position,yCord,progress}:MovingCircleProps) => {
  const {width, height} = useWindowDimensions();
  const cPoint = vec(width / 2, height / 2);
  
  const cx = useDerivedValue(
    () => mix(progress.value, position[0], position[1]),
    [progress],
  );
  return (
    <>

      <Circle c={cPoint} cx={cx} cy={yCord} r={(cPoint.x)/2}>
        <SLinearGradient
          start={{x: 0.5, y: 0.5}} // Start from the center
          end={{x: 1, y: 1}} // Radiate outwards in every direction
          colors={['#FEB640', '#FEB640']}
        />
      </Circle>

      <BackdropFilter filter={<Blur blur={120} mode={'clamp'} />} />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MovingCircle;
