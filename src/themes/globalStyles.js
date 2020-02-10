import {StyleSheet} from 'react-native';
import {Colors,Metrics,Fonts} from './index';


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: Metrics.WIDTH * 0.01,
        paddingVertical: Metrics.HEIGHT * 0.01,
    },

});
export default globalStyles;
