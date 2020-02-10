import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import {
    deleteProduct,
    deleteAllProduct,
    decrementQuantity,
    incrementQuantity,
} from '../../store/actions/basket.actions';
import globalStyles from '../../themes/globalStyles';
import {Colors, Fonts, Metrics} from '../../themes';
import * as Animatable from 'react-native-animatable';
import _ from 'lodash';
import styles from './styles';
import BottomDrawer from 'rn-bottom-drawer';
import Snackbar from 'react-native-snackbar-component';
import NumericInput from 'react-native-numeric-input';

const Basket = ({baskets: {basket}, themes: {Colors}, deleteProduct, deleteAllProduct, decrementQuantity, incrementQuantity}) => {
    const [snackbarDisplay, setSnackbarDisplay] = useState(false);
    useEffect(() => {
    }, [Colors]);

    function completePayment() {
        deleteAllProduct();
        setSnackbarDisplay(true);
    }

    function renderItem({item}) {
        return (
            <View style={{...globalStyles.container, backgroundColor: Colors.TEMPLATE_VIEW}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.imgContainer, backgroundColor: Colors.TEMPLATE_VIEW}}>
                        <Image style={styles.image} source={{uri: item.image}}/>
                    </View>

                    <View style={{...styles.detailContainer, backgroundColor: Colors.TEMPLATE_VIEW}}>
                        <Text style={{...styles.textName, color: Colors.TEMPLATE_TEXT}}> ${item.name}</Text>
                        <TouchableOpacity onPress={() => deleteProduct(item)}>
                            <EvilIcons
                                name={'trash'}
                                size={30}
                                color={Colors.TEMPLATE_TEXT}
                                style={{alignSelf: 'flex-end'}}
                            />
                        </TouchableOpacity>
                        <View style={{...styles.textContainer, backgroundColor: Colors.TEMPLATE_VIEW}}>
                            <Text style={{...styles.textPrice, color: Colors.TEMPLATE_TEXT}}> ${item.price}</Text>
                            <Text style={{...styles.textDiscountRate, color: Colors.TEMPLATE_TEXT}}>
                                {' '}
                                %30 OFF
                            </Text>

                        </View>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Text style={{...styles.textQuantity, color: Colors.TEMPLATE_TEXT}}> Quantity: </Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>
                                <TouchableOpacity style={{borderRadius: 4,backgroundColor: 'darkred' ,padding: 10}}
                                                  onPress={() => item.quantity==1?null:decrementQuantity(item)}><Text style={{color:'white'}}>-</Text></TouchableOpacity>
                                <Text style={{color: Colors.TEMPLATE_TEXT}}>  {item.quantity}  </Text>
                                <TouchableOpacity style={{borderRadius: 4,backgroundColor: 'darkgreen', padding: 10}}
                                                  onPress={() => incrementQuantity(item)}><Text style={{color:'white'}}>+</Text></TouchableOpacity>

                            </View>
                        </View>


                    </View>
                </View>
            </View>
        );
    }

    return (


        <View style={{...globalStyles.container, backgroundColor: Colors.TEMPLATE_VIEW}}>


            {basket.length == 0 ?
                <View style={{...styles.viewEmtyBasket, backgroundColor: Colors.TEMPLATE_VIEW}}>
                    <Text style={{...styles.textEmtyBasket, color: Colors.TEMPLATE_TEXT}}>No products in the
                        basket. </Text>
                </View>
                :

                <Animatable.View
                    animation="slideInDown"
                    iterationCount={1}
                    direction="alternate">
                    <FlatList data={basket} renderItem={renderItem} style={{marginBottom: 60}}/>
                </Animatable.View>
            }

            <BottomDrawer startUp={false} containerHeight={200} offset={120}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: Metrics.HEIGHT * 0.01,
                    backgroundColor: Colors.TEMPLATE_VIEW,
                }}>
                    <Text style={styles.checkoutText}>Checkout - {basket.length} item
                        ({_.sumBy(basket, item => Number(item.price) * item.quantity)}$)</Text>

                    <View style={{...styles.checkoutContainer, backgroundColor: Colors.TEMPLATE_VIEW}}>
                        <TouchableOpacity onPress={() => completePayment()}>
                            <View style={{...styles.checkoutView, backgroundColor: Colors.TEMPLATE_VIEW}}>
                                <EvilIcons
                                    name={'credit-card'}
                                    size={40}
                                    color={'darkgreen'}
                                    style={{alignSelf: 'flex-end'}}
                                />
                                <Text style={{textAlign: 'center', color: 'darkgreen'}}>Pay{'\n'}Now</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteAllProduct()}>
                            <View style={styles.checkoutView}>
                                <EvilIcons
                                    name={'trash'}
                                    size={40}
                                    color={'darkred'}
                                    style={{alignSelf: 'flex-end'}}
                                />
                                <Text style={{...styles.checkoutSubText, color: 'darkred'}}>Delete{'\n'}All</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomDrawer>

            <Snackbar position={'top'} visible={snackbarDisplay} textMessage="Congratulations, payment successful."
                      actionHandler={() => {
                          setSnackbarDisplay(false);
                      }}
                      backgroundColor={Colors.GREEN} accentColor={Colors.GRAY} autoHidingTime={1500}
                      actionText="OK"/>
        </View>
    );
};

const mapStateToProps = ({baskets, themes}) => ({baskets, themes});
export default connect(
    mapStateToProps,
    {deleteProduct, deleteAllProduct, incrementQuantity, decrementQuantity},
)(Basket);
