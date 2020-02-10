import * as keys from '../keys/basket.key';
import _ from 'lodash';

let basketData = [];

export const addProduct = (item) => dispatch => {
    basketData.push(item);
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
