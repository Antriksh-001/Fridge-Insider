import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MotiView } from 'moti';
import Svginserter from '../shared/Svginserter';
import Lottie from 'lottie-react-native';
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function Signup(props) {
      const [name, onChangeName] = useState('');
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      const [confirmPass, onChangeConfirmPass] = useState('');
      const [loaded, setLoaded] = useState(false);

      useEffect(() => {
            setLoaded(true);
      }, [loaded])

      if (loaded) {
            console.log('data loaded');
            return (
                  <MotiView style={styles.lowercont}
                        from={{
                              translateX: width,
                              opacity: 0
                        }}
                        animate={{
                              translateX: 0,
                              opacity: 1
                        }}
                        transition={{
                              type: 'timing',
                              duration: 400,
                        }}
                  >
                        <View style={styles.lowerHeading}>
                              <View>
                                    <Text style={styles.registertxt}>Register</Text>
                              </View>
                              <TouchableOpacity onPress={() => { console.log('Google Register Button Clicked') }}>
                                    <View style={styles.GoogleRegisterBox}>
                                          <Lottie source={require('../../../assets/animation/googleLogoAnim.json')} autoPlay={true} loop={true} style={styles.GoogleRegisterLogo} />
                                    </View>
                              </TouchableOpacity>
                        </View>
                        <View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Account'} width={width / 16.2} height={width / 16.2} /></View>
                                    <View><TextInput
                                          style={styles.input}
                                          onChangeText={onChangeName}
                                          value={name}
                                          placeholder="Enter Your First Name"
                                          keyboardType="email-address"
                                          cursorColor={'black'}
                                          autoFocus={false} >
                                    </TextInput>
                                    </View>
                              </View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Email'} width={width / 16.2} height={width / 16.2} /></View>
                                    <View><TextInput
                                          style={styles.input}
                                          onChangeText={onChangeEmail}
                                          value={email}
                                          placeholder="Enter Your Email"
                                          keyboardType="email-address"
                                          cursorColor={'black'}
                                          autoFocus={false} >
                                    </TextInput>
                                    </View>
                              </View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Password'} width={width / 16.2} height={width / 16.2} /></View>
                                    <View><TextInput
                                          style={styles.input}
                                          onChangeText={onChangePassword}
                                          value={password}
                                          placeholder="Enter Your Password"
                                          keyboardType="email-address"
                                          cursorColor={'black'}
                                          autoFocus={false} >
                                    </TextInput>
                                    </View>
                              </View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}>
                                          {confirmPass === '' ?
                                                (<Svginserter tag="ConfirmPass" width={width / 16.2} height={width / 16.2} />)
                                                : (confirmPass === password ?
                                                      <Lottie source={require('../../../assets/animation/Tick-Sign-Anim.json')} autoPlay={true} loop={false} duration={1500} style={styles.PasscheckLogo} />
                                                      : <Lottie source={require('../../../assets/animation/Cross-Sign_Anim.json')} autoPlay={true} loop={false} duration={1500} style={styles.PasscheckLogo} />)}
                                    </View>
                                    <View><TextInput
                                          style={styles.input}
                                          onChangeText={onChangeConfirmPass}
                                          value={confirmPass}
                                          placeholder="Confirm Password"
                                          keyboardType="email-address"
                                          cursorColor={'black'}
                                          autoFocus={false} >
                                    </TextInput>
                                    </View>
                              </View>
                        </View>
                        <View style={styles.footer}>
                              <TouchableHighlight style={styles.btnhighlightbox} onPress={() => {props.changeScreen('Location')}}>
                                    <View style={styles.btnbox}>
                                          <Text style={styles.btn}>Sign-up</Text>
                                    </View>
                              </TouchableHighlight>
                              <TouchableOpacity onPress={()=>{props.setLogin(true)}}>
                                    <View>
                                          <Text style={styles.AccAlreadytxt}>Already have{'\n'}Account?
                                                <Text style={styles.AccAlreadyLogintxt}> Login</Text>
                                          </Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                  </MotiView>
            )
      }
      else {
            console.log('data not loaded yet');
      }
}

const styles = StyleSheet.create({
      lowercont: {
            width: width,
            flex: 1,
            alignItems: 'center',
      },
      lowerHeading: {
            paddingTop: height / 45,
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: width / 9,
      },
      registertxt: {
            fontSize: width / 8.7,
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: Colors.body_dark,
            letterSpacing: 0.8,
      },
      GoogleRegisterBox: {
            width: width / 7.82,
            height: width / 7.82,
            borderRadius: 13,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
      },
      GoogleRegisterLogo: {
            width: width / 8.68,
            height: width / 8.68,
      },
      inputTextBox: {
            width: width / 1.28,
            height: height / 13,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            margin: 10,
            shadowColor: Colors.body_dark,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 8,
      },
      EntryLogoBox: {
            padding: width / 39,
      },
      input: {
            width: width / 1.65,
            height: height / 13,
            fontSize: width / 30,
      },
      footer: {
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: height / 30,
            paddingHorizontal: width / 9,
      },
      btnhighlightbox: {
            width: width / 2.5,
            height: width / 6.8,
            borderRadius: 30,
      },
      PasscheckLogo: {
            width: width/16.2,
            height: width/16.2,
      },
      btnbox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: Colors.body_light,
      },
      btn: {
            fontSize: width / 23,
            fontFamily: 'SF-Pro-Rounded-Bold',
            letterSpacing: 0.8,
            color: '#FFFFFF',
      },
      AccAlreadytxt: {
            fontFamily: 'SF-Pro-Text-Medium', 
            color: Colors.medium_gray, 
            fontSize: width / 27,
      },
      AccAlreadyLogintxt: {
            fontFamily: 'SF-Pro-Text-Bold',
            color: Colors.dark_gray,
      },
})