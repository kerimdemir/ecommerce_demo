import * as keys from '../keys/hotDeals.key';
import ApiService from '../../services/ApiService';
import _ from 'lodash';
import {Metrics} from '../../themes';

export const fetchHotDeals = (products) => dispatch => {
    dispatch({
        type: keys.FETCH_HOT_DEALS_PENDING,
        payload: '',
    });

    ApiService.getHotDeals()
        .then(response => {
            let hotdeals = [];
            response.data.map((item) => {
                for (let i in products) {
                    if (item.productId == products[i].id) {
                        let obj = {
                            ...products[i],
                            uri: products[i].image,
                            width: 500,
                            height: _.sample([320, 440, 560]),
                            discountrate: _.sample([20, 25, 35]),
                        };
                        hotdeals.push(obj);
                    }
                }
            });


            dispatch({
                type: keys.FETCH_HOT_DEALS_FULFILLED,
                payload: hotdeals,
            });
        })
        .catch(error => {
            dispatch({
                type: keys.FETCH_HOT_DEALS_REJECTED,
                payload: error,
            });
        });
};
