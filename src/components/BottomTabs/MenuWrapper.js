import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import Svginserter from '../shared/Svginserter';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

const MenuWrapper = ({ wrap, setWrap }) => {
      const [wheelOpen, setWheelOpen] = useState(false);
      console.log(wrap);
      return (
            <MotiPressable onPress={() => { setWrap(false) }} style={styles.container}>
                  <Svginserter tag={'MenuWrapper'} width={40} height={40} color={Colors.white} />
            </MotiPressable>
      );
}

const styles = StyleSheet.create({
      container: {
            position: 'absolute',
            bottom: height / 21.43,
            width: width/ 6.52,
            height: width / 6.52,
            marginLeft: width * 0.09,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.body_light2,
            // shadowColor: "black",
            // shadowOffset: {
            //       width: 0,
            //       height: 2,
            // },
            // elevation: 8,
      },
});

export default MenuWrapper;