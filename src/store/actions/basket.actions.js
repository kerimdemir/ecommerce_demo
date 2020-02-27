import * as keys from '../keys/basket.key';
import _ from 'lodash';
import randomInt from 'random-int';

let basketData = [];

export const addProduct = (item) => dispatch => {

    if (_.some(basketData, item)) {

        basketData=basketData.map(basket => basket.id === item.id ? {...basket, quantity : basket.quantity+1} : basket)

    } else {
        basketData.push({...item, quantity: 1});
    }

    dispatch({
        type: keys.ADD_PRODUCT,
        payload: basketData,
    });
};



export const incrementQuantity = (item) => dispatch => {

    if (_.some(basketData, item)) {

        basketData=basketData.map(basket => basket.id === item.id ? {...basket, quantity : basket.quantity+1} : basket)

    } else {
        basketData.push({...item, quantity: 1});
    }

    dispatch({
        type: keys.ADD_PRODUCT,
        payload: basketData,
    });
};

export const decrementQuantity = (item) => dispatch => {

    if (_.some(basketData, item)) {

        basketData=basketData.map(basket => basket.id === item.id ? {...basket, quantity : basket.quantity-1} : basket)

    } else {
        basketData.push({...item, quantity: 1});
    }

    dispatch({
        type: keys.ADD_PRODUCT,
        payload: basketData,
    });
};


export const deleteProduct = (item) => dispatch => {
    _.pullAllWith(basketData, [item], _.isEqual);
    dispatch({
        type: keys.DELETE_PRODUCT,
        payload: basketData,
    });
};

export const deleteAllProduct = (item) => dispatch => {
    basketData = [];
    dispatch({
        type: keys.DELETE_ALL_PRODUCT,
        payload: basketData,
    });
};

export const quantity = (item) => dispatch => {
    basketData = [];
    dispatch({
        type: keys.DELETE_ALL_PRODUCT,
        payload: basketData,
    });
};
