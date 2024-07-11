import {View, Text, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import FloatingWriteButton from '../../components/Button/FloatingWriteButton';
import LogContext from '../../contexts/LogContext';
import FeedList from '../../components/Feeds/FeedList';

const FeedsScreen = () => {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={{flex: 1}}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

export default FeedsScreen;
