import React from 'react';

import { View, Pressable, Dimensions, StyleSheet } from 'react-native'
import NavigationIcon from './NavigationIcon';

import SelectWheel from './SelectWheel'

const { width } = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation }: any) => {
      return (
            <View style={styles.mainContainer}>
                  {state.routes.map((route: any, index: number) => {
                        if (route.name == "PlaceholderScreen") {
                              return (
                                    <View key={index} style={[styles.mainItemContainer, styles.selectwheel]}>
                                          <SelectWheel />
                                    </View>
                              );
                        }
                        const { options } = descriptors[route.key];
                        const label =
                              options.tabBarLabel !== undefined
                                    ? options.tabBarLabel
                                    : options.title !== undefined
                                          ? options.title
                                          : route.name;

                        console.log(options.title);

                        const isFocused = state.index === index;

                        const onPress = () => {
                              const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                              });
                              if (!isFocused && !event.defaultPrevented) {
                                    navigation.navigate(route.name);
                              }
                        };
                        return (
                              <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label == "notes" ? 0 : 0 }]}>
                                    <Pressable
                                          onPress={onPress}
                                          style={{ backgroundColor: isFocused ? "#52a2e7" : "white", borderRadius: 20, }}>
                                          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                                                <NavigationIcon route={label} isFocused={isFocused} />
                                          </View>
                                    </Pressable>
                              </View>
                        );
                  })}
            </View>
      );
}

const styles = StyleSheet.create({
      mainContainer: {
            marginHorizontal: width * 0.1,
            paddingHorizontal: 10,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 25,
            borderRadius: 25,
            backgroundColor: "white",
            shadowColor: "black",
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            elevation: 8,
      },
      mainItemContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            borderRadius: 1,
            borderColor: "white",
            width: 50,
      },
      selectwheel: {
            marginVertical: 3,
            width: 40,
      },
})


export default TabBar; 