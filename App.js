import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScreenNavigator from './src/containers/ScreenNavigator';

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScreenNavigator />
    </SafeAreaProvider>
  );
};

export default App;