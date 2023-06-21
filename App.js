import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './src/screens/drawer';
import Main_home from './src/screens/Homepage/Main_home';
import ScreenNavigator from './src/containers/ScreenNavigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  //Fonts
  const [fontsLoaded] = useFonts({
    'SF-Pro-Rounded-Regular': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Regular.ttf'),
    'SF-Pro-Rounded-Medium': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Medium.ttf'),
    'SF-Pro-Rounded-Semibold': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Semibold.ttf'),
    'SF-Pro-Rounded-Bold': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Bold.ttf'),
    'SF-Pro-Rounded-Heavy': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Heavy.ttf'),
    'SF-Pro-Text-Light': require('./assets/fonts/SF-Pro-Text-Light.otf'),
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Medium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
    'SF-Pro-Text-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-Heavy': require('./assets/fonts/SF-Pro-Text-Heavy.otf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScreenNavigator />
      {/* <StatusBar />
      <Drawer />
      <Main_home/> */}
    </SafeAreaProvider>
  );
};

export default App;