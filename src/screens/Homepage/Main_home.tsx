import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from '../../containers/BottomTabs';
import { Colors } from '../../constants/Colors';

const Main_home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const drawer = () => {

    Animated.timing(scale, {
      toValue: showMenu ? 1 : 0.895,
      duration: 300,
      useNativeDriver: true
    }).start()

    Animated.timing(moveToRight, {
      // YOur Random Value...
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true
    }).start()

    setShowMenu(!showMenu);
  }

  return (

      <Animated.View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#fff',
          transform: [{ scale: scale }, { translateX: moveToRight }],
          borderRadius: showMenu ? 18 : 0,
        }}>

        {/* Header */}

        <View style={{
          flexDirection: 'row',height: 50,alignItems: 'center', backgroundColor: 'yellow'
        }}>
          <TouchableOpacity
            style={{marginLeft: 20 , position:'absolute'}}
            onPress={drawer}>
            {!showMenu ? <Image source={require('../../../assets/images/menu.png')} style={{ width: 22, height: 23 }} /> : <Image source={require('../../../assets/images/close.png')} style={{ width: 22, height: 23 }} />}
          </TouchableOpacity>
        </View>

        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>

      </Animated.View>
  );
};

export default Main_home;