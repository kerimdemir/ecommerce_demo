import * as keys from '../keys/product.key';

const initialState = {products: []};
export default (state = initialState, action) => {
  switch (action.type) {
    case keys.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        products: action.payload,
        fetching: false,
      };
    case keys.FETCH_PRODUCTS_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };



    default:
      return state;
  }
};
