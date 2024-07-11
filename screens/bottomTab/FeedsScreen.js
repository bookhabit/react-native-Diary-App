import {View, Text, TextInput} from 'react-native';
import React, {useContext} from 'react';
import FloatingWriteButton from '../../components/Button/FloatingWriteButton';
import LogContext from '../../contexts/LogContext';
import FeedList from '../../components/Feeds/FeedList';

const FeedsScreen = () => {
  const {logs} = useContext(LogContext);
  return (
    <View style={{flex: 1}}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;
