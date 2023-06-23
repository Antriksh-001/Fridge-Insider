import React, { useState } from 'react';
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import NavigationIcon from './NavigationIcon';
import SelectWheel from './SelectWheel';
import MenuWrapper from './MenuWrapper';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const TabBar = ({ state, descriptors, navigation }: any) => {
      const [tab, setTab] = useState('Home');
      const [wrap, setWrap] = useState(true);

      return (
            wrap ? (<MenuWrapper wrap={wrap} setWrap={setWrap} />)
                  : (<View style={styles.mainContainer}>
                        {state.routes.map((route: any, index: number) => {
                              if (route.name == "PlaceholderScreen") {
                                    return (
                                          <View key={index} style={[styles.mainItemContainer, styles.selectwheel]}>
                                                <SelectWheel wrap={wrap} setWrap={setWrap} />
                                          </View>
                                    );
                              }
                              const { options } = descriptors[route.key];
                              const label =
                                    options.tabBarLabel !== undefined ? options.tabBarLabel
                                          : options.title !== undefined ? options.title : route.name;

                              const isFocused = state.index === index;
                              const onPress = () => {
                                    const event = navigation.emit({
                                          type: 'tabPress',
                                          target: route.key,
                                    });
                                    if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);

                                    if (label == "Home") setTab("Home");
                                    else if (label == "Notifications") setTab("Notifications");
                                    else if (label == "Fridge") setTab("Fridge");
                                    else if (label == "Profile") setTab("Profile");
                              };
                              return (
                                    <View key={index} style={styles.mainItemContainer}>
                                          {label == "Home" ? (
                                                <MotiView style={styles.MovingBg}
                                                      from={{
                                                            scale: 1,
                                                            translateX: 0,
                                                      }}
                                                      animate={{
                                                            transform: [
                                                                  { scale: 1 },
                                                                  tab == "Fridge" ? { translateX: width / 6.52 }
                                                                        : tab == "Notifications" ? { translateX: width / 2.172 }
                                                                              : tab == "Profile" ? { translateX: width / 1.63 } : { translateX: 0 },
                                                            ]
                                                      }}
                                                      transition={{
                                                            type: 'timing',
                                                            duration: 300,
                                                      }}
                                                />)
                                                : null}
                                          <MotiPressable onPress={onPress}
                                                from={{
                                                      scale: 0,
                                                }}
                                                animate={({ pressed }) => {
                                                      'worklet'

                                                      return {
                                                            opacity: pressed ? 0.6 : 1,
                                                            scale: pressed ? 0.8 : 1,
                                                      }
                                                }}
                                                transition={{
                                                      type: 'timing',
                                                      duration: 100,
                                                }}
                                                style={styles.iconContainerBox}>
                                                <View style={styles.iconContainer}>
                                                      <NavigationIcon route={label} isFocused={isFocused} />
                                                </View>
                                          </MotiPressable>
                                    </View>
                              );
                        })}
                  </View>)
      );
}

const styles = StyleSheet.create({
      mainContainer: {
            position: 'absolute',
            bottom: height / 31.72,
            flexDirection: 'row',
            marginHorizontal: width * 0.09,
            paddingHorizontal: height / 79.3,
            borderRadius: 25,
            backgroundColor: "white",
            shadowColor: Colors.black,
            elevation: 6,
      },
      mainItemContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: width / 26.07,
      },
      selectwheel: {
            marginVertical: width / 130,
            width: width / 9.775,
      },
      MovingBg: {
            position: 'absolute',
            zIndex: -1,
            width: width / 8.31,
            height: width / 8.31,
            borderRadius: width / 26.07,
            backgroundColor: Colors.body_light2,
      },
      iconContainerBox: {
            borderRadius: 15,
            padding: 2,
            zIndex: 1,
      },
      iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: 10,
      },
});

export default TabBar; 