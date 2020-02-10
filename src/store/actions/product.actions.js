import * as keys from '../keys/product.key';
import ApiService from '../../services/ApiService';
import _ from 'lodash';
import moment from 'moment';
import {Metrics} from '../../themes';
/*let obj = {
    ...item,
    uri: item.image,
    width: 320,
    height: _.sample([320, 440, 560]),
};*/

export const fetchProducts = () => dispatch => {
    dispatch({
        type: keys.FETCH_PRODUCTS_PENDING,
        payload: '',
    });

    let data = [];
    ApiService.getProducts()
        .then(productResponse => {
            let products = productResponse.data;

            ApiService.getProductTimings()
                .then(productTimingsResponse => {
                    productTimingsResponse.data.map(productTiming => {
                        for (let i in products) {
                            if ((products[i].id == productTiming.productId) && (moment().isBetween(productTiming.startDate, productTiming.endDate))) {
                                let obj = {
                                    ...productTiming,
                                    ...products[i],
                                    uri: products[i].image,
                                    width: 320,
                                    height: _.sample([320, 440, 560]),
                                };
                                data.push(obj);
                            }
                        }
                    });
                    dispatch({
                        type: keys.FETCH_PRODUCTS_FULFILLED,
                        payload: data,
                    });
                });

        })


        .catch(error => {
            dispatch({
                type: keys.FETCH_PRODUCTS_REJECTED,
                payload: error,
            });
        });
};
