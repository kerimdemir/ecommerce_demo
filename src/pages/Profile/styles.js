import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
    }
    ,
    text: {
        color: Colors.TEMPLATE_COLOR,
        fontSize:50,
        fontFamily: Fonts.type.semiBold,
        textAlign: 'center',
    },
});
export default styles;
