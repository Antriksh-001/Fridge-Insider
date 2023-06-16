import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Svginserter from '../Svginserter';
import * as Screen from '../../../constants/Screen';
import { Colors } from '../../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function ForgotPassword(props) {
      const [email, onChangeEmail] = useState('');
      const [loaded, setLoaded] = useState(false);

      useEffect(() => {
            setLoaded(true);
      }, [loaded])

      if (loaded) {
            return (
                  <View style={styles.lowercont}>
                        <View style={styles.lowermaincont}>
                              <TouchableOpacity onPress={() => { props.setForgotpass(false) }}>
                                    <View style={styles.backbtn}>
                                          <Feather name="chevron-left" size={width / 14} color="#52A2E7" style={{ paddingRight: width / 196 }} />
                                    </View>
                              </TouchableOpacity>
                              <View style={styles.ForgotHeadingBox}>
                                    <Text style={styles.ForgotHeadingtxt}>Forgot{'\n'}password?</Text>
                              </View>
                              <View style={styles.inputTextBox}>
                                    <View style={styles.EntryLogoBox}><Svginserter tag={'Mail'} width={width / 16.2} height={width / 16.2} /></View>
                                    <View><TextInput
                                          style={styles.input}
                                          onChangeText={onChangeEmail}
                                          value={email}
                                          placeholder="Enter your email address"
                                          keyboardType="email-address"
                                          cursorColor={'black'}
                                          autoFocus={false} >
                                    </TextInput>
                                    </View>
                              </View>
                              <View style={styles.NoteBox}>
                                    <Text style={styles.NoteTxt}><Text style={{ color: '#52A2E7' }}>*</Text> We will send you a message to set or reset your new password</Text>
                              </View>
                              <View style={styles.Sendbtncont}>
                                    <TouchableOpacity onPress={() => { console.log('Clicked on Send Button') }}>
                                          <View style={styles.Sendbtn}>
                                                <Feather name="arrow-right" size={width / 14} color="white" />
                                          </View>
                                    </TouchableOpacity>
                              </View>

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
            alignItems: 'center',
      },
      lowermaincont: {
            width: width / 1.28,
            alignItems: 'flex-start',
      },
      backbtn: {
            width: width / 9,
            height: width / 9,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginTop: height / 28,
      },
      ForgotHeadingBox: {
            marginTop: height / 60,
            paddingLeft: width / 78,
      },
      ForgotHeadingtxt: {
            fontSize: width / 10,
            fontFamily: 'SF-Pro-Rounded-Bold',
            color: Colors.body_dark,
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
            marginTop: 10,
            shadowColor: Colors.body_dark,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 8,
      },
      EntryLogoBox: {
            padding: height / 80,
      },
      input: {
            width: width / 1.65,
            height: height / 13,
            fontSize: width / 29,
      },
      NoteBox: {
            paddingTop: height / 40,
      },
      NoteTxt: {
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: height / 56.9,
            color: Colors.gray,
      },
      Sendbtncont: {
            width: width / 1.28,
            alignItems: 'flex-end',
            paddingTop: height / 20,
      },
      Sendbtn: {
            width: width / 7,
            height: width / 7,
            backgroundColor: '#52A2E7',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
      },
})