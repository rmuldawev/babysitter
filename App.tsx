import React from 'react';
import {NativeBaseProvider} from 'native-base';
import MainNavigator from './src/navigators/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
