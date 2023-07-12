import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MotiView } from 'moti';
import { Snackbar } from 'react-native-paper';

// Constants
import * as Screen from '../../constants/Screen';
import { Colors } from '../../constants/Colors';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

// Components
import { animateStyles, transitionConfig } from '../../components/Authentication/motiConfig';
import InputBox from '../../components/Authentication/AuthInputBox';
import Button from '../../components/shared/Button';
import GoogleBtn from '../../components/Authentication/LogIn/GoogleBtn';

// Firebase
import { handleLogin } from '../../Firebase/FirebaseLogin';

export default function Login(props) {
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');

      const handleLoginPress = useMemo(() => () =>
            handleLogin(email, password, props.changeScreen, setLoading, setError),
            [email, password, props]
      );
      console.log('Login Screen rendered');
      return (
            <MotiView style={styles.lowercont} from={{ translateX: -width, opacity: 0 }} animate={animateStyles} transition={transitionConfig} >
                  <View style={styles.InputBoxes}>
                        <InputBox SvgName={'Email'} onChangeText={onChangeEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={onChangePassword} value={password} placeholder={'Enter Your Password'} />
                  </View>
                  <View style={styles.forgotPassBox}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => props.setForgotpass(true)}>
                              <Text style={styles.forgotpasstext}>Forgot Password?</Text>
                        </TouchableOpacity>
                  </View>
                  {loading ? (
                        <ActivityIndicator style={styles.spinner} size={35} color={Colors.palette_secondary} />
                  ) : (
                        <View style={{ alignItems: 'center' }}>
                              <Button
                                    Title={'Login'}
                                    BtnHighlight={styles.btnhighlight}
                                    BtnBox={styles.btnbox}
                                    BtnTxt={styles.btntxt}
                                    handleonPress={handleLoginPress}
                              />
                              <View style={styles.SeparatorBox}>
                                    <View style={styles.lineSeparator} />
                                    <Text style={styles.Or_Separator}>Or</Text>
                                    <View style={styles.lineSeparator} />
                              </View>
                              <GoogleBtn />
                        </View>
                  )}
                  <Snackbar
                        visible={!!error}
                        onDismiss={() => setError('')}
                        action={{
                              label: 'Close',
                              onPress: () => setError(''),
                        }}
                        style={styles.snackbar}
                  >
                        {error}
                  </Snackbar>
            </MotiView>
      );
}

const styles = StyleSheet.create({
      lowercont: {
            width,
            alignItems: 'center',
      },
      InputBoxes: {
            paddingTop: height / 22,
      },
      forgotPassBox: {
            width: width / 1.28,
            paddingLeft: width / 60,
            paddingTop: width / 80,
      },
      forgotpasstext: {
            fontFamily: 'SF-Pro-Text-Semibold',
            color: Colors.body_dark,
            fontSize: width / 27.9,
      },
      btnhighlight: {
            width: width / 1.28,
            height: width / 6.4,
            alignSelf: 'center',
            borderRadius: 30,
            margin: height / 25,
      },
      btnbox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: Colors.body_light,
      },
      btntxt: {
            fontSize: width / 23,
            fontFamily: 'SF-Pro-Rounded-Bold',
            letterSpacing: 0.8,
            color: '#FFFFFF',
      },
      SeparatorBox: {
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            bottom: height / 158,
      },
      lineSeparator: {
            backgroundColor: '#000000',
            width: width / 4,
            height: width / 195.5,
            borderRadius: 10,
            marginHorizontal: width / 22,
      },
      Or_Separator: {
            fontSize: width / 21.5,
            fontFamily: 'SF-Pro-Rounded-Bold',
      },
      snackbar: {
            marginBottom: width / 39.1,
      },
      spinner: {
            marginVertical: height / 10,
      },
});
