import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './screens/RootStackNavigator';
import {LogContextProvider} from './contexts/LogContext';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStackNavigator />
      </LogContextProvider>
    </NavigationContainer>
  );
};

export default App;
