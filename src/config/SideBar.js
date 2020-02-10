import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Switch} from 'react-native';
import {Colors} from '../themes';
import {connect} from 'react-redux';
import Actions from 'react-native-router-flux';
import {setTheme} from '../store/actions/theme.actions';

const SideBar = ({setTheme,themes:{Colors}}) => {
        const [btnSwitch, setBtnSwitch] = useState(false);
        useEffect(() => {

        }, []);

        const onValChange = () => {

            setBtnSwitch(!btnSwitch);
            if (btnSwitch == true) {
                setTheme('dark');
            } else {
                setTheme('light');
            }

        };


        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Colors.BLACK}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:20}}>
                    <Text> Gece Modu </Text>
                    <Switch onValueChange={() => onValChange()} value={btnSwitch}/>
                </View>
            </SafeAreaView>

        );
    }


const mapStateToProps = ({themes}) => ({themes});
export default connect(
    mapStateToProps,
    {setTheme},
)(SideBar);
