import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#368FFA',
    },

    imgContainer: {
        marginBottom: Metrics.HEIGHT * 0.05,
    },

    img: {
        margin: 10, borderRadius: 10,
    },

    textContainer: {
        flexDirection: 'row', paddingLeft: 5, alignItems: 'center',
    },

    textName: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.medium,
    },

    textPrice: {
        fontFamily: Fonts.type.semiBold,
        color: Colors.BUTTON_ACTIVE_COLOR,
        fontSize: Fonts.size.regular,
    },

    textDiscountRate: {
        fontFamily: Fonts.type.thin,
        fontSize: Fonts.size.small,
    },

});
export default styles;
