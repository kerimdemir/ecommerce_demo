import {AppRegistry} from 'react-native';
import App from './src/App';

import {setCustomTextInput, setCustomText} from 'react-native-global-props';
import {Fonts} from './src/themes';

console.disableYellowBox = true;
// Creating the custom props that I want that will be plugged into each function
const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
};
const customTextProps = {
  style: {
    //fontSize: 12,
    fontFamily: Fonts.type.base,
    color: 'black',
    backgroundColor: 'transparent',
  },
};
setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);
console.disableYellowBox = true;

AppRegistry.registerComponent('dominosdemo', () => App);
