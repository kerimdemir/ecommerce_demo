import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors} from '../../themes';

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        margin: 5,
    },

    checkoutContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: Metrics.HEIGHT * 0.05,
    },

    checkoutView: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.CARD_BORDER,
        borderRadius: 10,
        padding: 10,
    },

    checkoutText: {
        textAlign: 'center',
        fontSize: Fonts.size.large,
        color: Colors.TEMPLATE_COLOR,
    },

    checkoutSubText: {
        textAlign: 'center',
        color: Colors.GREEN,
    },

    imgContainer: {
        flex: 1,
    },

    image: {
        width: '100%', height: 200, resizeMode: 'cover', borderRadius:6,
    },

    viewEmtyBasket: {
        alignItems: 'center', justifyContent: 'center',
    },

    textEmtyBasket: {
        textAlign: 'center',
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.regular,
    },

    textContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
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
