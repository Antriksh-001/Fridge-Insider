import React from 'react';
import {StatusBar} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './src/screens/drawer';
import Main_home from './src/screens/Homepage/Main_home';

const App = () => {

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <Drawer />
      <Main_home/>
    </SafeAreaProvider>
  );
};

export default App;