import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import HomeNavigator from '../../containers/HomeNavigator';
import Drawer from '../drawer';
import Svginserter from '../../components/shared/Svginserter';
import { MotiView } from 'moti';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const Main_home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const Opendrawer = () => {
    setShowMenu(true);
  }

return (
  <View style={{ flex: 1 }}>
    <Drawer setShowMenu={setShowMenu} />
    <MotiView style={styles.container}
      from={{ scale: 1, translateX: 0 }}
      animate={showMenu ? { scale: 0.75, translateX: 340 } : { scale: 1, translateX: 0 }}
      transition={{ type: 'timing', duration: 550 }}>

      <MotiView style={styles.Main_homeShadow}
        from={{ scale: 1, translateX: 0 }}
        animate={showMenu ? { scale: 1, translateX: -45 } : { scale: 1, translateX: 0 }}
        transition={{ type: 'timing', duration: 650 }} />

      <MotiView style={styles.menucontainer}
        from={{ rotateX: '0deg', rotateY: '0deg' }}
        animate={showMenu ? { rotateZ: '90deg', translateX: -20, translateY: -40 } : { rotateX: '0deg', rotateY: '0deg', rotateZ: '0deg', translateX: 0, translateY: 0 }}
        transition={{ type: 'timing', duration: 350 }}
      >
        <TouchableOpacity onPress={Opendrawer}>
          <View style={{ height: 30, width: 30, }}>
            <Svginserter tag={'Menu'} style={styles.menuBurger} />
          </View>
        </TouchableOpacity>
      </MotiView>

      <HomeNavigator showMenu={showMenu} />
    </MotiView>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: 'black',
    elevation: 20,
  },
  Main_homeShadow: {
    height: height - 80,
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.32)',
  },
  menucontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 1,
  },
  menuBurger: {
    width: 24,
    height: 24,
    margin: 20,
  },
});
export default Main_home;