import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FeedListItem from './FeedListItem';

const FeedList = ({logs}) => {
  return (
    <FlatList
      data={logs}
      style={{flex: 1}}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => (
        <View style={{backgroundColor: '#e0e0e0', height: 1, width: '100%'}} />
      )}
    />
  );
};

export default FeedList;
