import React, { useEffect }from 'react';
import {StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './src/screens/drawer';
import Main_home from './src/screens/Homepage/Main_home';
import { font } from './src/constants/font';

const App = () => {

  //Fonts
  font();

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <Drawer />
      <Main_home/>
    </SafeAreaProvider>
  );
};

export default App;