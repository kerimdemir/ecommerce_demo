import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import Snackbar from 'react-native-snackbar-component';


import styles from './styles';
import {fetchProducts} from '../../store/actions/product.actions';
import {addProduct} from '../../store/actions/basket.actions';
import globalStyles from '../../themes/globalStyles';
import Loading from '../../components/Loading';

const Home = ({products: {products, fetching}, fetchProducts, addProduct, themes: {Colors}}) => {
    const [snackbarDisplay, setSnackbarDisplay] = useState(false);
    useEffect(() => {

        fetchProducts();
        console.log(Actions)
        Actions.replace(Actions.currentScene,  {navigationBarStyle: {
                color: 'red',
                backgroundColor: 'red',
                fontSize: 22,
                fontWeight: '700',
                justifyContent: 'center',
                marginLeft: 30,
            }})
    }, [fetchProducts]);

    function _addBasket(item) {
        addProduct(item);
        setSnackbarDisplay(true);

        setTimeout(() => {
            setSnackbarDisplay(false);
        }, 1500);

    }

    function renderItem({item}) {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => _addBasket(item)}>
                <View
                    style={styles.container}>
                    <Image
                        style={styles.img}
                        source={{uri: item.image}}
                    />
                    <View style={styles.footerContainer}>
                        <Text style={{...styles.textName, color: Colors.TEMPLATE_TEXT}}> {item.name} </Text>
                        <Text style={{...styles.textPrice, color: Colors.TEMPLATE_TEXT}}> ${item.price} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return fetching ? (
        <Loading/>
    ) : (
        <View style={{...globalStyles.container, backgroundColor: Colors.TEMPLATE_VIEW}}>

            <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate">
                <FlatList data={products} showsVerticalScrollIndicator={false} renderItem={renderItem}/>
            </Animatable.View>
            <Snackbar visible={snackbarDisplay} textMessage="Product added to cart."
                      backgroundColor={Colors.GREEN}  accentColor={Colors.GREEN} autoHidingTime={1500}
                      actionText="OK"/>

        </View>
    );
};

const mapStateToProps = ({products, themes}) => ({products, themes});
export default connect(
    mapStateToProps,
    {fetchProducts, addProduct},
)(Home);
