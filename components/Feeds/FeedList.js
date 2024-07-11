import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, onScrolledToBottom, ListHeaderComponent}) => {
  const onScroll = e => {
    if (!onScrolledToBottom) {
      // 버튼을 재사용할 때 스크롤 기능이 들어가지 않는 버튼으로 사용하기 위해서
      return;
    }

    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (
      // 예외처리 - content개수가 적어서 스크롤 필요 없는상황
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 72
    ) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={{flex: 1}}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => (
        <View style={{backgroundColor: '#e0e0e0', height: 1, width: '100%'}} />
      )}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default FeedList;
