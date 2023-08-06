import React, { useState } from 'react';
import Index from '../screens/GetStarted/index';
// import * as SplashScreen from 'expo-splash-screen';
// import { useFonts } from 'expo-font';
import AuthenticationPage from '../screens/Authentication/AuthenticationPage';
import Location from '../screens/Location/Location';
import ProvideLocation from '../screens/Location/ProvideLocation';
import Main_home from '../screens/Homepage/Main_home';

export default function ScreenNavigator() {
      const [screen, changeScreen] = useState('MainHome');

      const screenComponents = {
            GetStarted: <Index changeScreen={changeScreen} />,
            AuthenticationPage: <AuthenticationPage changeScreen={changeScreen} />,
            Location: <Location changeScreen={changeScreen} />,
            ProvideLocation: <ProvideLocation changeScreen={changeScreen} />,
            MainHome: <Main_home changeScreen={changeScreen} />,
      };

      return screenComponents[screen];
}
