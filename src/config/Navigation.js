import React, {useEffect, useState} from 'react';
import {StyleSheet, AsyncStorage, TouchableOpacity,View} from 'react-native';
import {
    Router,
    Scene,
    Drawer,
    Tabs,
    Reducer,
    Actions,
} from 'react-native-router-flux';
import {Colors, Fonts, Metrics} from '../themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideBar from './SideBar';
import {Home, Deals, Basket, Profile} from './index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabContent from './TabContent';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {deleteAllProduct, deleteProduct} from '../store/actions/basket.actions';

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        backgroundColor: 'white', // changing navbar color
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    navTitle: {
        color: Colors.TEMPLATE_COLOR, // changing navbar title color
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size.large,
        textAlign: 'left',

        position: 'absolute',
        left: -Metrics.screenWidth* 0.18,
    },

    routerScene: {
        backgroundColor: 'transparent',
        // paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};
const Navigation = ({themes:{Colors}}) => {
    useEffect(() => {
    }, []);
    return (

            <Router
                createReducer={reducerCreate}
                navigationBarStyle={{...styles.navBar,backgroundColor:Colors.TEMPLATE_VIEW}}
                titleStyle={{...styles.navTitle,textColor:Colors.TEMPLATE_COLOR}}
                sceneStyle={{...styles.routerScene,backgroundColor:Colors.TEMPLATE_VIEW}}>
                <Scene key="root" hideNavBar>
                    <Drawer
                        contentComponent={SideBar}
                        key={'drawer'}
                        rightTitle={() => (
                            <Icon name="menu" size={24} color={Colors.TEMPLATE_COLOR}/>
                        )}
                        drawerWidth={Metrics.WIDTH * 0.7}
                        drawerPosition={'right'}
                        open={false}>
                        <Tabs
                            tabBarStyle={{borderTopWidth:0, shadowColor: 'gray',backgroundColor:Colors.TEMPLATE_VIEW,
                                shadowOffset: {height: 0},
                                shadowOpacity: 0.3}}
                            panHandlers={null}
                            translucent={true}
                            key="tabbar"
                            lazy
                            unmountScenes={false}
                            swipeEnabled={false}
                            animationEnabled={false}
                            showLabel={false}
                            tabBarPosition={'bottom'}
                            icon={TabContent}
                            backTitle={' '}>
                            <Scene key="Home" title="Deals" component={Home}/>
                            <Scene key="Deals"  title="Hottest Deals" component={Deals}/>
                            <Scene key="Basket" title="Basket" component={Basket}/>
                            <Scene key="Profile" title="Profile" component={Profile}/>
                        </Tabs>
                    </Drawer>
                </Scene>
            </Router>

    );
};


const mapStateToProps = ({themes}) => ({themes});
export default connect(
    mapStateToProps,
    {},
)(Navigation);
