import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, Fonts} from '../themes';
import {store} from '../store/reducers/store';
import {connect} from 'react-redux';

import * as Animatable from 'react-native-animatable';


const TabContent = ({baskets: {basket}, title, focused}) => {
    let SIZE = 20;


    switch (title) {
        case 'Deals':
            return (
                <View style={styles.container}>
                    <FontAwesome5
                        name={'home'}
                        color={
                            focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR
                        }
                        size={SIZE}
                    />
                    <Text
                        style={{
                            ...styles.textStyle,
                            color: focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR,
                        }}>
                        home
                    </Text>
                </View>
            );
            break;
        case 'Hottest Deals':
            return (
                <View style={styles.container}>

                    <FontAwesome5
                        name={'tag'}
                        color={
                            focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR
                        }
                        size={SIZE}
                    />
                    <Text
                        style={{
                            ...styles.textStyle,
                            color: focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR,
                        }}>
                        deals
                    </Text>
                </View>
            );
            break;
        case 'Basket':
            return (
                <View style={styles.container}>
                    {basket.length > 0 ?
                        <Animatable.View style={{
                            position: 'absolute',
                            backgroundColor: Colors.TEMPLATE_COLOR,
                            top: 7,
                            right: 0,
                            borderRadius: 50,
                            width: 19,
                            height: 19,
                        }} animation="shake" iterationCount={1} direction="alternate">
                            <Text style={{
                                textAlign: 'center',
                                color: 'white',
                                fontFamily: Fonts.type.base,
                            }}>{basket.length}</Text>
                        </Animatable.View>
                        :
                        null}
                    <FontAwesome5
                        name={'shopping-basket'}
                        color={
                            focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR
                        }
                        size={SIZE}
                    />
                    <Text
                        style={{
                            ...styles.textStyle,
                            color: focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR,
                        }}>
                        basket
                    </Text>
                </View>
            );
            break;
        case 'Profile':
            return (
                <View style={styles.container}>
                    <FontAwesome5
                        name={'user'}
                        color={
                            focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR
                        }
                        size={SIZE}
                    />
                    <Text
                        style={{
                            ...styles.textStyle,
                            color: focused
                                ? Colors.BUTTON_ACTIVE_COLOR
                                : Colors.BUTTON_INACTİVE_COLOR,
                        }}>
                        profile
                    </Text>
                </View>
            );
            break;

        default:
            return <View/>;
    }
};

const styles = StyleSheet.create({
    container: {alignItems: 'center',  justifyContent:'center',  height:81 },
    textStyle: {
        fontSize: Fonts.size.small,
        fontFamily: Fonts.type.base,
        width:'100%',



    },
});

const mapStateToProps = ({baskets}) => ({baskets});
export default connect(
    mapStateToProps,
    {},
)(TabContent);
