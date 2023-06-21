import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {getPathXCenterByIndex} from '../../../utils/Path';
import usePath from '../../../hooks/usePath';
import {SCREEN_WIDTH} from '../../../constants/Screen';
export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};
const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;
const AnimatedIcon = Animated.createAnimatedComponent(FeatherIcon);
const TabItem: FC<TabProps> = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  // const tabStyle = useAnimatedStyle(() => {
  //   const translateY = animatedActiveIndex.value - 1 === index ? 12 : 12;
  //   const iconPositionX = iconPosition - index * ICON_SIZE;
  //   return {
  //     width: ICON_SIZE,
  //     height: ICON_SIZE,
  //     transform: [
  //       {translateY: withTiming(translateY)},
  //       {translateX: iconPositionX - ICON_SIZE / 2},
  //     ],
  //   };
  // });
  // const labelContainerStyle = useAnimatedStyle(() => {
  //   const translateY = animatedActiveIndex.value - 1 === index ? 80 : 80;
  //   return {
  //     transform: [
  //       {translateY: withTiming(translateY/2)},
  //       {translateX: labelPosition - LABEL_WIDTH / 2},
  //     ],
  //   };
  // });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? '#e51111' : 'rgba(128,128,128,0.8)',
  );

  //Adjust Icon color for this first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming('#e51111');
    } else {
      iconColor.value = withTiming('rgba(128,128,128,0.8)');
    }
  }, [activeIndex]);

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));

  let tempColor;
  {activeIndex == index+1 ? tempColor='#e51111':tempColor='rgba(128,128,128,0.8)'};
  return (
    <>
      <Animated.View style={[styles.tabStyle1,]}>
        <Pressable
          testID={`tab${label}`}
          style={{flexDirection:'column',justifyContent:'center',alignItems:'center',}}
          //Increasing touchable Area
          hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}
          onPress={onTabPress}>
          <View>
          <AnimatedIcon
            name={icon}
            size={25}
            animatedProps={animatedIconProps}
            />
          </View>  
          {/* <FeatherIcon name={icon} size={25} color={'black'}/> */}
          {/* <Animated.View style={[labelContainerStyle, styles.labelContainer]}> */}
          {activeIndex == index+1 ? 
          <View style={{marginLeft:5}}>
            <Text style={{color: tempColor,fontSize:13}}>{label}</Text>
          </View> : <View></View>}
        </Pressable>
      </Animated.View>    
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
    // width: 100,
  },
  tabStyle1:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    // alignItems:'center',
  }
});
