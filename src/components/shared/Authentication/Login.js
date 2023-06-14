import React, { useState } from 'react';
import { Keyboard, View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import Svginserter from '../Svginserter';
import Lottie from 'lottie-react-native';
import * as Screen from '../../../constants/Screen';
import { Colors } from '../../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function Login(props) {
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      // const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      //       console.log('keyboard dismissed');
      // });

      return (
            <View style={styles.lowercont}>
                  <View style={styles.InputBoxes}>
                        <View style={styles.inputTextBox}>
                              <View style={styles.EntryLogoBox}><Svginserter tag={'Email'} width={24} height={24} style={styles.EmailLogo} /></View>
                              <View><TextInput
                                    style={styles.input}
                                    onChangeText={onChangeEmail}
                                    value={email}
                                    placeholder="Enter Your Email"
                                    keyboardType="email-address"
                                    cursorColor={'black'}
                                    autoFocus={false}
                              // hideSubscription
                              >
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
                                    autoFocus={false}
                                    onSubmitEditing={() => { console.log('Keyboard dismiss') }}
                                    onFocus={() => console.log("focus received")}
                                    onBlur={() => console.log("focus lost")}
                              // hideSubscription
                              // onPointerCancel={()=>{console.log('clicked')}}
                              // onEndEditing={() => { console.log('clicked') }}
                              // onEndEditing={props.onChangeUI(false)}
                              >
                              </TextInput>
                              </View>
                        </View>
                  </View>
                  <View style={ styles.forgotPassBox } >
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => { console.log('Forgot Password') }}>
                              <Text style={styles.forgotpasstext}>Forgot Password?</Text>
                        </TouchableOpacity>
                  </View>
                  <TouchableHighlight style={styles.btnhighlightbox} onPress={() => { console.log('Login Button Pressed') }}>
                        <View style={styles.btnbox}>
                              <Text style={styles.btn}>Login</Text>
                        </View>
                  </TouchableHighlight>
                  <View style={styles.SeparatorBox}>
                        <View style={styles.lineSeparator} />
                        <Text style={styles.Or_Separator}>Or</Text>
                        <View style={styles.lineSeparator} />
                  </View>
                  <TouchableHighlight style={styles.GoogleHighlightBox} onPress={() => { console.log('Google Login Button Pressed') }}>
                        <View style={styles.Googlebtnbox}>
                              <View style={styles.GoogleLogoAnim} >
                                    <Lottie source={require('../../../../assets/animation/googleLogoAnim.json')} autoPlay={true} loop={true} />
                              </View>
                              <View>
                                    <Text style={styles.Googlebtntext}>Log In with Google</Text>
                              </View>
                        </View>
                  </TouchableHighlight>
            </View>
      )
}

const styles = StyleSheet.create({
      lowercont: {
            width: width,
            height: height * 0.65,
            alignItems: 'center',
      },
      InputBoxes: {
            paddingTop: height / 22,
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
      forgotPassBox: {
            width: width / 1.28,
            paddingLeft: width / 60,
            paddingTop: width / 80,
      },
      forgotpasstext: {
            fontFamily: 'SF-Pro-Text-Semibold',
            color: Colors.body_dark,
      },
      btnhighlightbox: {
            width: width / 1.28,
            height: width / 6.4,
            alignSelf: 'center',
            borderRadius: 30,
            margin: height/25,
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
      SeparatorBox: { 
            flexDirection: 'row', 
            alignItems: 'center', 
            position: 'relative', 
            bottom: 5,
      },
      lineSeparator:{
            backgroundColor: '#000000',
            width: width/4,
            height: 2,
            borderRadius: 10,
            marginHorizontal: width/22,
      },
      Or_Separator: {
            fontSize: 18,
            fontFamily: 'SF-Pro-Rounded-Bold',
      },
      GoogleHighlightBox: {
            width: width / 1.28,
            height: width / 6.4,
            alignSelf: 'center',
            borderRadius: 30,
            margin: height / 25,
      },
      Googlebtnbox: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: '#FFFFFF',
      },
      GoogleLogoAnim:{
            width: width/8,
            height: width/8,
      },
      Googlebtntext: {
            fontSize: width / 21,
            fontFamily: 'SF-Pro-Rounded-Heavy',
            color: 'rgba(0,0,0,0.50)',
            paddingHorizontal: 13,
            letterSpacing: 0.5,
      },
})