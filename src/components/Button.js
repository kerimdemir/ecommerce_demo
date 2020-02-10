import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, Metrics} from '../themes';
const Button = ({name, onClick}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} style={styles.button}>
        <Text style={styles.text}>name</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECF8FA',
    height: Metrics.HEIGHT * 0.06,
    width: Metrics.WIDTH * 0.4,
    borderRadius: 4,
  },

  text: {
    color: Colors.TEMPLATE_COLOR,
    fontFamily: Fonts.type.bold,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
