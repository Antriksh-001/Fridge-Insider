import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { MotiView } from 'moti';
import { Snackbar } from 'react-native-paper';
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

// components
import { animateStyles, transitionConfig } from '../../components/Authentication/SignUp/motiSignupConfig';
import InputBox from '../../components/Authentication/AuthInputBox';
import Header from '../../components/Authentication/SignUp/Header';
import Footer from '../../components/Authentication/SignUp/Footer';

//Firebase
import { handleSignup } from '../../Firebase/FirebaseSignup'; // Import functions from firebase.js

const Signup = (props) => {
      const [name, onChangeName] = useState('');
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      const [confirmPass, onChangeConfirmPass] = useState('');
      const [loaded, setLoaded] = useState(false);
      const [loading, setLoading] = useState(false); // State variable for loader
      const [error, setError] = useState('');

      useEffect(() => {
            setLoaded(true);
      }, [loaded]);

      const SignUp = () => {

            return (
                  <MotiView style={styles.lowercont} from={{ translateX: width, opacity: 0 }} animate={animateStyles} transition={transitionConfig} >
                        <Header />
                        <View>
                              <InputBox SvgName={'Account'} onChangeText={onChangeName} value={name} placeholder={'Enter Your First Name'} />
                              <InputBox SvgName={'Email'} onChangeText={onChangeEmail} value={email} placeholder={'Enter Your Email'} />
                              <InputBox SvgName={'Password'} onChangeText={onChangePassword} value={password} placeholder={'Enter Your Password'} />
                              <InputBox SvgName={'ConfirmPass'} onChangeText={onChangeConfirmPass} value={confirmPass} password={password} placeholder={'Confirm Password'} />
                        </View>
                        {/* Conditional rendering based on loading state */}
                        {loading ? (
                              <ActivityIndicator style={styles.spinner} size={20} color={Colors.palette_secondary} />
                        ) : (
                              <Footer Register={() => handleSignup(email, password, name, confirmPass, setLoading, setError, props)} setLogin={props.setLogin} />
                        )}
                        {/* Snackbar for displaying error messages */}
                        <Snackbar
                              visible={!!error}
                              onDismiss={() => setError('')} // Dismiss error by setting it to an empty string
                              action={{
                                    label: 'Close',
                                    onPress: () => setError(''), // Dismiss error by setting it to an empty string
                              }}
                              style={styles.snackbar}
                        >
                              {error}
                        </Snackbar>
                  </MotiView>
            );
      };

      if (loaded) {
            console.log('data loaded');
            return SignUp();
      } else {
            console.log('data not loaded yet');
            return null; // Render null or another loading indicator if necessary
      }
};

const styles = StyleSheet.create({
      lowercont: {
            width: width,
            flex: 1,
            alignItems: 'center',
      },
      spinner: {
            marginVertical: 10,
      },
      snackbar: {
            backgroundColor: '#D0342C',
            marginBottom: 10,
      },
});

export default Signup;
