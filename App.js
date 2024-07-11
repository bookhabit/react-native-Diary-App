import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './screens/RootStackNavigator';
import {LogContextProvider} from './contexts/LogContext';
import {SearchContextProvider} from './contexts/SearchContext';

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStackNavigator />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
