// reducers.js
import { combineReducers } from 'redux';
import waybillReducer from './waybill';
import productReducer from './product';
import userReducer from './user';

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
  users: userReducer,
});

export default rootReducer;
