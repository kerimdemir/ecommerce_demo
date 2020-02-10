import * as keys from '../keys/hotDeals.key';

const initialState = {hotDeals: []};
export default (state = initialState, action) => {
  switch (action.type) {
    case keys.FETCH_HOT_DEALS_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.FETCH_HOT_DEALS_FULFILLED:
      return {
        ...state,
        hotDeals: action.payload,
        fetching: false,
      };
    case keys.FETCH_HOT_DEALS_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};
