import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../themes';

const styles = StyleSheet.create({
    container: {

        shadowColor: 'gray',
        shadowOffset: {height: 2},
        shadowOpacity: 0.3,
        margin: 15,
        marginBottom: Metrics.HEIGHT * 0.01,
    },

    img: {
        width: '100%',
        height: 200,
        borderRadius: 4,
    },

    title: {
        marginHorizontal: Metrics.WIDTH * 0.02,
        marginVertical: Metrics.HEIGHT * 0.01,
    },

    textName: {
        fontFamily: Fonts.type.base,
    },

    textPrice: {
        fontFamily: Fonts.type.semiBold,
    },

    footerContainer: {
        flexDirection: 'row', justifyContent: 'space-between',
        marginTop: Metrics.HEIGHT * 0.01,

    },
});
export default styles;
