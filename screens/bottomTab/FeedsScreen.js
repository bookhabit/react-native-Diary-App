import {View, Text, TextInput} from 'react-native';
import React, {useContext} from 'react';
import FloatingWriteButton from '../../components/Button/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;
