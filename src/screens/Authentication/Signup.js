import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { MotiView } from 'moti';
import { Snackbar } from 'react-native-paper';

// constants
import { Colors } from '../../constants/Colors';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;

// components
import { animateStyles, transitionConfig } from '../../components/Authentication/motiConfig';
import InputBox from '../../components/Authentication/AuthInputBox';
import Header from '../../components/Authentication/SignUp/Header';
import Footer from '../../components/Authentication/SignUp/Footer';
import { handleSignup } from '../../Firebase/FirebaseSignup';

const Signup = (props) => {
      const [name, onChangeName] = useState('');
      const [email, onChangeEmail] = useState('');
      const [password, onChangePassword] = useState('');
      const [confirmPass, onChangeConfirmPass] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');

      const handleSignupPress = useMemo(() => () =>
            handleSignup(email, password, name, confirmPass, setLoading, setError, props),
            [email, password, name, confirmPass, props]
      );
      console.log('Signup Screen rendered');
      return (
            <MotiView
                  style={styles.lowercont}
                  from={{ translateX: width, opacity: 0 }}
                  animate={animateStyles}
                  transition={transitionConfig}
            >
                  <Header />
                  <View>
                        <InputBox SvgName={'Account'} onChangeText={onChangeName} value={name} placeholder={'Enter Your First Name'} />
                        <InputBox SvgName={'Email'} onChangeText={onChangeEmail} value={email} placeholder={'Enter Your Email'} />
                        <InputBox SvgName={'Password'} onChangeText={onChangePassword} value={password} placeholder={'Enter Your Password'} />
                        <InputBox
                              SvgName={'ConfirmPass'}
                              onChangeText={onChangeConfirmPass}
                              value={confirmPass}
                              password={password}
                              placeholder={'Confirm Password'}
                        />
                  </View>
                  {loading ? (
                        <ActivityIndicator style={styles.spinner} size={width / 17.77} color={Colors.palette_secondary} />
                  ) : (
                        <Footer Register={handleSignupPress} setLogin={props.setLogin} />
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
});

export default Signup;
