// reducers.js
import { combineReducers } from 'redux';
import waybillReducer from './waybill';

const rootReducer = combineReducers({
  waybill: waybillReducer,
});

export default rootReducer;
