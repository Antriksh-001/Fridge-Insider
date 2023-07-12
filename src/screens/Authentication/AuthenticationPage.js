import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';
import { MotiView } from 'moti';

// constants
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// components
import { animateStyles2, transitionConfig } from '../../components/Authentication/motiConfig';

// screens
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const AuthenticationPage = (props) => {
      const [login, setLogin] = useState(true);
      const [forgotpass, setForgotpass] = useState(false);

      const handleLoginPress = useMemo(() => () => setLogin(true), []);
      const handleSignupPress = useMemo(() => () => {
            setLogin(false);
            setForgotpass(false);
      }, []);
      console.log('render');
      return (
            <ScrollView style={styles.maincont}>
                  <MotiView
                        style={styles.upper}
                        from={{ translateY: -height * 0.35 }}
                        animate={animateStyles2}
                        transition={transitionConfig}
                  >
                        <View style={styles.loginAnimBox}>
                              <Lottie
                                    source={require('../../../assets/animation/login_animation.json')}
                                    autoPlay
                                    loop
                                    style={styles.loginAnim}
                              />
                        </View>
                        <View style={styles.loginSigninHeaderBox}>
                              <Pressable style={styles.AuthCmnHeaderBox} onPress={handleLoginPress}>
                                    <Text style={styles.HeaderCommontxt}>Login</Text>
                              </Pressable>
                              <Pressable style={styles.AuthCmnHeaderBox} onPress={handleSignupPress}>
                                    <Text style={styles.HeaderCommontxt}>Sign-up</Text>
                              </Pressable>
                        </View>
                        <MotiView
                              style={styles.MovingHighlight}
                              from={{ translateX: 0 }}
                              animate={login ? { translateX: 0 } : { translateX: width / 2.41 }}
                              transition={{
                                    type: 'spring',
                                    duration: 800,
                              }}
                        />
                  </MotiView>
                  <View>
                        {login ? (
                              forgotpass ? (
                                    <ForgotPassword setForgotpass={setForgotpass} />
                              ) : (
                                    <Login changeScreen={props.changeScreen} setForgotpass={setForgotpass} />
                              )
                        ) : (
                              <Signup setLogin={setLogin} changeScreen={props.changeScreen} />
                        )}
                  </View>
            </ScrollView>
      );
};

const styles = StyleSheet.create({
      maincont: {
            flex: 1,
            backgroundColor: Colors.bg,
      },
      upper: {
            width,
            height: height * 0.35,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000000',
            shadowOpacity: 0.06,
            shadowRadius: 20,
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
            width,
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
            maxWidth: 160,
            height: width / 97.75,
            maxHeight: 6,
            borderRadius: 20,
            backgroundColor: '#57A2E7',
            position: 'relative',
            right: width / 4.768,
      },
});

export default AuthenticationPage;