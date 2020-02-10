import {Dimensions} from 'react-native';
import {Fonts} from './index';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const type = {
  base: 'Poppins-Regular',
  bold: 'Poppins-Black',
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
  boldItalic:'Poppins-BoldItalic',
  extraBold:'Poppins-ExtraBold',
  extraBoldItalic:'Poppins-ExtraBoldItalic',
  extraLight:'Poppins-ExtraLight',
  extraLightItalic:'Poppins-ExtraLightItalic',
  italic:'Poppins-Italic',
  light:'Poppins-Light',
  lightItalic:'Poppins-LightItalic',
  medium:'Poppins-Medium',
  mediumItalic:'Poppins-MediumItalic',
  regular:'Poppins-Regular',
  semiBold:'Poppins-SemiBold',
  semiBoldItalic: 'Poppins-SemiBoldItalic',
  thin: 'Poppins-Thin',
  thinItalic:'Poppins-ThinItalic',

};
const size = {
  input: {fontSize: moderateScale(25), fontFamily: type.base},
  large:20,
  regular: 17,
  medium: 14,
  small: 13,
  tiny: 10,
};
//Text.defaultProps.style = { color: 'red' }
const props = {
  Text: {
    backgroundColor: 'transparent',
    fontSize: moderateScale(16),
    fontFamily: type.base,
  },
  TextInput: {
    underlineColorAndroid: 'transparent',
    keyboardType: 'numeric',
  },
};
const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};
export default {
  type,
  size,
  props,
  style,
  scale,
  verticalScale,
  moderateScale,
};
