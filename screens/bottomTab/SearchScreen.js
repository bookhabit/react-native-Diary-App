import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import SearchContext from '../../contexts/SearchContext';
import FeedList from '../../components/Feeds/FeedList';
import LogContext from '../../contexts/LogContext';
import EmptySearchResult from '../../components/Empty/SearchResult';

const SearchScreen = () => {
  const {keyword} = useContext(SearchContext);

  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }
  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={{flex: 1}}>
      <FeedList logs={filtered} />
    </View>
  );
};

export default SearchScreen;
