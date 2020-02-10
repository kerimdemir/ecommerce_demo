import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import globalStyles from '../../themes/globalStyles';

const Profile = () => {
    useEffect(() => {

    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
            <Text style={styles.text}>Page</Text>
        </View>

    );
};

export default Profile;
