import {View, Text, Animated, StyleSheet, Button} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import LogContext from '../../contexts/LogContext';

function FadeInAndOut() {
  const animation = useRef(new Animated.Value(1)).current;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation,
          },
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setHidden(!hidden);
        }}
      />
    </View>
  );
}

function SlideLeftAndRight() {
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: enabled ? 150 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, slideAnimation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: slideAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title="Toggle Slide"
        onPress={() => {
          setEnabled(!enabled);
        }}
      />
    </View>
  );
}

const CalendarScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FadeInAndOut />
      <SlideLeftAndRight />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;
