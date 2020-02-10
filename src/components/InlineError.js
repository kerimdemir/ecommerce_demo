import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../themes';

const InlineError = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, Fonts.props.Text]}> {error} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Metrics.HEIGHT * 0.04,
    marginLeft: Metrics.WIDTH * 0.05,
    marginRight: Metrics.WIDTH * 0.05,
    alignItems: 'center',
  },
  text: {
    color: 'red',
    textAlign: 'center',
  },
});

export default InlineError;
