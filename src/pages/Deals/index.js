import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {fetchProducts} from '../../store/actions/product.actions';
import globalStyles from '../../themes/globalStyles';
import Loading from '../../components/Loading';
import MasonryList from 'react-native-masonry-list';
import {fetchHotDeals} from '../../store/actions/hotDeals.actions';
import products from '../../store/reducers/product.reducer';
import {Colors, Fonts, Images, Metrics} from '../../themes';
import * as Animatable from 'react-native-animatable';
import Snackbar from 'react-native-snackbar-component';
import {addProduct} from '../../store/actions/basket.actions';
import styles from './styles';

const Deals = ({hotDeals: {hotDeals, fetching}, products: {products}, themes: {Colors}, fetchHotDeals, addProduct}) => {
    const [snackbarDisplay, setSnackbarDisplay] = useState(false);
    useEffect(() => {
        fetchHotDeals(products);
    }, [fetchHotDeals]);

    function _addBasket(item) {
        addProduct(item);
        setSnackbarDisplay(true);

        setTimeout(() => {
            setSnackbarDisplay(false);

        }, 1500);

    }

    const MasonryCustomComponent = props => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => _addBasket(props.data)}>
            <View style={{...styles.imgContainer, backgroundColor: Colors.TEMPLATE_VIEW}}>
                <Image
                    resizeMode={'cover'}
                    source={{uri: props.data.uri}}
                    style={{...styles.img,backgroundColor: Colors.TEMPLATE_VIEW, width:150, height: props.data.height}}
                />
                <Text numberOfLines={1}
                      style={{...styles.textName, color: Colors.TEMPLATE_TEXT}}>  {props.data.name}</Text>
                <View style={{...styles.textContainer, backgroundColor: Colors.TEMPLATE_VIEW}}>
                    <Text style={{...styles.textPrice, color: Colors.TEMPLATE_TEXT}}> ${props.data.price}</Text>
                    <Text style={{...styles.textDiscountRate, color: Colors.TEMPLATE_TEXT}}> {props.data.discountrate}%
                        OFF</Text>

                </View>

            </View>
        </TouchableOpacity>
    );
    return fetching ? (
        <Loading/>
    ) : (

        <View style={{...globalStyles.container, backgroundColor: Colors.TEMPLATE_VIEW}}>
            <Animatable.View style={{...globalStyles.container, backgroundColor: Colors.TEMPLATE_VIEW}}
                             animation="slideInDown" iterationCount={1}
                             direction="alternate">

                <MasonryList listContainerStyle={{backgroundColor: Colors.TEMPLATE_VIEW}} images={hotDeals} columns={ Dimensions.get('window').width < Dimensions.get('window').height?2:4 }
                             completeCustomComponent={(props: any) => <MasonryCustomComponent {...props} />}/>

                <Snackbar visible={snackbarDisplay} textMessage="Product added to cart."
                          backgroundColor={Colors.GREEN} accentColor={Colors.GREEN} autoHidingTime={1500}
                          actionText="OK"/>

            </Animatable.View>

        </View>
    );
};
const mapStateToProps = ({hotDeals, products, themes}) => ({hotDeals, products, themes});
export default connect(
    mapStateToProps,
    {fetchHotDeals, addProduct},
)(Deals);
