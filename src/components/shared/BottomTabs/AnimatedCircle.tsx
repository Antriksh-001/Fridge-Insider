import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
type CircleProps = {
  circleX: Animated.SharedValue<number>;
};
const circleContainerSize = 85;

const AnimatedCircle: FC<CircleProps> = ({circleX}) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize/2}],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: circleContainerSize / 5,
    top: 0,
    width: 85,
    // borderRadius: circleContainerSize,
    height: 2,
    backgroundColor: '#e51111',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
