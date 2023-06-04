import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/containers/BottomTabs';
import Drawer from './src/screens/drawer';

const App = () => {
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
    <SafeAreaProvider style={{ flex: 1 }}>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      <StatusBar />

      <Drawer />

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
          flexDirection: 'row', height: 50, justifyContent: 'space-between', alignItems: 'center', marginRight: 20, shadowColor: '#219ebc',
          elevation: 25
        }}>
          <TouchableOpacity
            style={{ marginLeft: 20 }}
            onPress={drawer}>
            {!showMenu ? <Image source={require('./assets/menu.png')} style={{ width: 22, height: 23 }} /> : <Image source={require('./assets/close.png')} style={{ width: 22, height: 23 }} />}
          </TouchableOpacity>
          <View>
            <Text>LOGO</Text>
          </View>
        </View>

        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>

      </Animated.View>

    </SafeAreaProvider>
  );
};

export default App;