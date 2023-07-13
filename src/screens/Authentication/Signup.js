import React, { useState, useMemo, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import { MotiView } from 'moti';

// constants
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

// components
import { animateStyles, transitionConfig } from '../../components/Authentication/motiConfig';
import Mainheader from '../../components/Authentication/SignUp/Mainheader';
import InputBox from '../../components/Authentication/AuthInputBox';
import Footer from '../../components/Authentication/SignUp/Footer';
import SnackBar from '../../components/shared/Snackbar';

import LoadingModal from '../../components/shared/LoadingModal';

//Firebase Authentication
import auth from '@react-native-firebase/auth';
import { handleSignup } from '../../Firebase/FirebaseSignup';
import { signInWithGoogle, signOutFromGoogle } from '../../Firebase/FirebaseGoogleAuth';

const Signup = (props) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPass, setConfirmPass] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [initializing, setInitializing] = useState(true);
      const [user, setUser] = useState();
      const [loadingModalVisible, setLoadingModalVisible] = useState(false);

      useEffect(() => {
            console.log('UseEffect 1 called');
            const subscriber = auth().onAuthStateChanged((user) => {
                  setUser(user);
                  if (initializing) setInitializing(false);
            });

            return () => subscriber(); // Unsubscribe on unmount
      }, [initializing]);

      useEffect(() => {
            console.log('UseEffect 2 called');
            if (!initializing && user) {
                  console.log('User is signed in');
                  props.changeScreen('GetStarted');
                  signOutFromGoogle();  // Calling only for development and debugging purpose
            }
      }, [initializing, user, props]);

      const handleSignupPress = useMemo(
            () => async () => {
                  await handleSignup(email, password, name, confirmPass, setLoading, setError, props);
            },
            [email, password, name, confirmPass, props]
      );

      const onGoogleButtonPress = useMemo(
            () => async () => {
                  const user = await signInWithGoogle(setLoadingModalVisible);
                  console.log(user);
            }, []
      );

      console.log('Signup Screen rendered');

      return (
            <MotiView
                  style={styles.lowercont}
                  from={{ translateX: width, opacity: 0 }}
                  animate={animateStyles}
                  transition={transitionConfig}
            >
                  <Mainheader onGoogleButtonPress={onGoogleButtonPress} />
                  <View>
                        <InputBox SvgName={'Account'} onChangeText={setName} value={name} placeholder={'Enter Your First Name'} />
                        <InputBox SvgName={'Email'} onChangeText={setEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={setPassword} value={password} placeholder={'Enter Your Password'} />
                        <InputBox
                              SvgName={'ConfirmPass'}
                              onChangeText={setConfirmPass}
                              value={confirmPass}
                              password={password}
                              placeholder={'Confirm Password'}
                        />
                  </View>
                  {loading ? (
                        <ActivityIndicator style={styles.spinner} size={width / 16.29} color={Colors.palette_secondary} />
                  ) : (
                        <Footer Register={handleSignupPress} setLogin={props.setLogin} />
                  )}
                  <SnackBar error={error} setError={setError} /> 
                  <LoadingModal loadingModalVisible={loadingModalVisible} />
            </MotiView>
      );
};

const styles = StyleSheet.create({
      lowercont: {
            flex: 1,
            alignItems: 'center',
      },
      spinner: {
            marginVertical: width / 39.1,
      },
      snackbar: {
            marginBottom: width / 39.1,
      },
      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});

export default Signup;
