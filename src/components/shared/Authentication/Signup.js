import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import Svginserter from '../Svginserter';
import Lottie from 'lottie-react-native';
import * as Screen from '../../../constants/Screen';
import { Colors } from '../../../constants/Colors';

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
                  <View style={styles.lowercont}>
                        <View style={styles.lowerHeading}>
                              <View>
                                    <Text style={styles.registertxt}>Register</Text>
                              </View>
                              <TouchableOpacity onPress={() => { console.log('Google Register Button Clicked') }}>
                                    <View style={styles.GoogleRegisterBox}>
                                          <Lottie source={require('../../../../assets/animation/googleLogoAnim.json')} autoPlay={true} loop={true} style={styles.GoogleRegisterLogo} />
                                    </View>
                              </TouchableOpacity>
                        </View>
                        <View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Email'} width={24} height={24} /></View>
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
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Email'} width={24} height={24} /></View>
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
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Password'} width={24} height={24} style={styles.PasswordLogo} /></View>
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
                                                (<Svginserter tag="ConfirmPass" width={24} height={24} />)
                                                : (confirmPass === password ?
                                                      <Lottie source={require('../../../../assets/animation/Tick-Sign-Anim.json')} autoPlay={true} loop={false} duration={1500} style={styles.tickLogo} />
                                                      : <Lottie source={require('../../../../assets/animation/Cross-Sign_Anim.json')} autoPlay={true} loop={false} duration={1500} style={styles.tickLogo} />)}
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
                              <TouchableHighlight style={styles.btnhighlightbox} onPress={() => { console.log('Sign-up Button Pressed') }}>
                                    <View style={styles.btnbox}>
                                          <Text style={styles.btn}>Sign-up</Text>
                                    </View>
                              </TouchableHighlight>
                              <TouchableOpacity onPress={()=>{props.setLogin(true)}}>
                                    <View>
                                          <Text style={{ fontFamily: 'SF-Pro-Text-Medium', color: Colors.medium_gray, fontSize: 15 }}>Already have{'\n'}Account?
                                                <Text style={{ fontFamily: 'SF-Pro-Text-Bold', color: Colors.dark_gray }}> Login</Text>
                                          </Text>
                                    </View>
                              </TouchableOpacity>
                        </View>
                  </View>
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
            paddingTop: height / 35,
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: width / 9,
      },
      registertxt: {
            fontSize: 45,
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: Colors.body_dark,
            letterSpacing: 0.8,
      },
      GoogleRegisterBox: {
            width: 50,
            height: 50,
            borderRadius: 13,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
      },
      GoogleRegisterLogo: {
            width: 45,
            height: 45,
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
            padding: 10,
      },
      input: {
            width: width / 1.65,
            height: 50,
      },
      PasswordLogoBox: {
            padding: 10,
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
      tickLogo: {
            width: 24,
            height: 24,
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
})