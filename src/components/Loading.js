import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = ({}) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={'gray'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontal: {
    padding: 20,
  },
});
export default Loading;
