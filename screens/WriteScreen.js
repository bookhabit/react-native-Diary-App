import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WritePage/WriteHeader';
import WriteEditor from '../components/WritePage/WriteEditor';
import LogContext from '../contexts/LogContext';

const WriteScreen = ({navigation, route}) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');

  const {onCreate, onModify, onRemove} = useContext(LogContext);
  const onSave = () => {
    if (log) {
      // 기존에 log가 있으면 수정
      onModify({
        id: log.id,
        date: log.date,
        title,
        body,
      });
    } else {
      onCreate({
        title,
        body,
        date: new Date().toISOString(),
      });
    }
    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;
