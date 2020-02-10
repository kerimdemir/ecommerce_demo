import {Platform, StyleSheet} from "react-native";
import {Metrics, Fonts, Colors} from "../themes/"


const styles = StyleSheet.create({
    headerSec: {
        backgroundColor: "#2d324f",
        height: Metrics.HEIGHT * 0.1,
        borderBottomWidth: 0,
        paddingTop: Metrics.HEIGHT * 0.045,
        elevation: 0,
        paddingLeft: Metrics.WIDTH * 0.05,
        paddingRight: Metrics.WIDTH * 0.05
    },

    left: {
        flex: 0.5
    },

    backArrow: {
        justifyContent: "center",
        alignItems: "center"
    },

    body: {
        flex: 3,
        alignItems: "center"
    },

    textTitle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(16),
        alignSelf: "center",
        fontFamily: Fonts.type.base
    },

    right: {
        flex: 0.5
    },

    drawerContainer: {
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT,
        backgroundColor: Colors.black
    },

    menuListItem: {
        marginLeft: Metrics.WIDTH * 0.03,
        color: Colors.black,
        fontSize: Fonts.moderateScale(14),
        fontFamily: Fonts.type.base
    },
    bottomMenuListItem: {

        color: Colors.black,
        fontSize: Fonts.moderateScale(9),
        fontFamily: Fonts.type.base
    },


    menuIcon: {
        width: Metrics.WIDTH * 0.06,
        height: Metrics.WIDTH * 0.06,
        resizeMode: "contain"
    },

    container: {

        height: Metrics.HEIGHT,
        backgroundColor: "transparent"
    },

    imgContainer: {
        height: 'auto',
        backgroundColor: 'transparent'
    },

    listProfileContainer: {

        backgroundColor: Colors.WHITE,
        height: Metrics.HEIGHT,


    },

    profileDataBg: {
        flexDirection: "column",
        alignItems: 'center',
        paddingHorizontal: Metrics.WIDTH * 0.08,
        paddingVertical: Metrics.HEIGHT * 0.08,
        backgroundColor: Colors.TEMPLATE_COLOR
    },

    profileImg: {
        width: Metrics.WIDTH * 0.20,
        height: Metrics.WIDTH * 0.20,
        borderRadius: Metrics.WIDTH * 0.10,
        borderColor: Colors.gray,
        borderWidth: 2,
        resizeMode: "cover",

    },

    nameTxt: {
        fontSize: Fonts.moderateScale(15),
        fontFamily: Fonts.type.base,
        color: Colors.white,
        marginBottom: Metrics.HEIGHT * 0.003,
    },

    addressTxt: {
        fontSize: Fonts.moderateScale(12),
        fontFamily: Fonts.type.base,
        color: Colors.white,

    },

    nameAddressTxt: {
        alignItems: 'center',
        flexDirection: "column",
        fontFamily: Fonts.type.base,
    },

    menuListBg: {
        marginLeft: Metrics.WIDTH * 0.06,
        backgroundColor: Colors.transparent,
    },

    menuListItemBg: {
        flexDirection: "row",
        marginTop: Metrics.HEIGHT * 0.03,
        alignItems:'center',



    },


    markerStyle: {
        height: Metrics.HEIGHT,
        width: Metrics.HEIGHT * 0.03,
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "white"
    }
});

export default styles;
