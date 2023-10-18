// reducers.js
import { combineReducers } from 'redux';
import waybillReducer from './waybill';
import productReducer from './product';

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
});

export default rootReducer;
