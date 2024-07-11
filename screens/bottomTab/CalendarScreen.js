import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import LogContext from '../../contexts/LogContext';

const CalendarScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 24, color: '#000'}}>캘린더</Text>
    </View>
  );
};

export default CalendarScreen;
