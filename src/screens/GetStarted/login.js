import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Lottie from 'lottie-react-native';
import { MotiView } from 'moti';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function login() {
      const [highlight, setHighlight] = useState(false);

      return (
            <View style={styles.cont}>
                  <View style={styles.upper}>
                        <View style={styles.loginAnimBox}>
                              <Lottie source={require('../../../assets/animation/login_animation.json')} autoPlay={true} loop={true} style={styles.loginAnim} />
                        </View>
                        <View style={styles.loginSigninHeaderBox} >
                              <Pressable style={styles.AuthCmnHeaderBox} onPress={() => { setHighlight(false) }} >
                                    <Text style={styles.HeaderCommontxt}>Login</Text>
                              </Pressable>
                              <Pressable style={styles.AuthCmnHeaderBox} onPress={() => { setHighlight(true) }}>
                                    <Text style={styles.HeaderCommontxt}>Sign-up</Text>
                              </Pressable>
                        </View>
                        <MotiView style={styles.MovingHighlight}
                              from={{
                                    translateX: 0,
                              }}
                              animate={highlight ? { translateX: 162, } : { translateX: 0 }}
                              transition={{
                                    type: 'spring',
                                    duration: 800,
                              }}
                        />
                  </View>
                  <View style={styles.lower}>
                  </View>
            </View>
      )
}

const styles = StyleSheet.create({
      cont: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.bg,
      },
      statusbar: {
            width: width,
            height: 30,
            backgroundColor: 'white',
      },
      upper: {
            flex: 0.37,
            width: width,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            bottom: 10,
            shadowColor: '#000000',
            shadowOpacity: 0.06,
            elevation: 4,
      },
      loginAnimBox: {
            flex: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: height / 25,
      },
      loginAnim: {
            width: width / 1.7,
            height: width / 1.7,
      },
      loginSigninHeaderBox: {
            flex: 0.2,
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingHorizontal: width / 12,
      },
      AuthCmnHeaderBox: {
            width: width / 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
      },
      HeaderCommontxt: {
            fontFamily: 'SF-Pro-Text-Semibold',
            fontSize: width / 23,
      },
      MovingHighlight: {
            width: width * 0.33,
            height: 4,
            borderRadius: 20,
            backgroundColor: '#57A2E7',
            position: 'relative',
            right: 82,
      },
})