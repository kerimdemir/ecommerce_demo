import {combineReducers} from 'redux';
import products from './product.reducer';
import hotDeals from './hotDeals.reducer';
import baskets from './basket.reducer';
import themes from './theme.reducer';

export default combineReducers({
  products,
  hotDeals,
  themes,
  baskets,
});
