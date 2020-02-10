import * as keys from '../keys/basket.key';

const initialState = {basket: []};
export default (state = initialState, action) => {
    switch (action.type) {
        case keys.ADD_PRODUCT:
            return {
                ...state,
                basket: action.payload,
            };
        case keys.DELETE_PRODUCT:
            return {
                ...state,
                basket: action.payload,
            };

        case keys.DELETE_ALL_PRODUCT:
            return {
                ...state,
                basket: action.payload,
            };
        default:
            return state;

    }
};
