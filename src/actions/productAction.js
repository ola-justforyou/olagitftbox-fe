import axios from 'axios';
import {
  SET_LIST_PRODUCTS,
  SET_LIST_PRODUCTS_LOADING,
  SET_LIST_PRODUCTS_ERROR,
} from '../constants/actionType';

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: SET_LIST_PRODUCTS_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_PRODUCTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_LIST_PRODUCTS_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_LIST_PRODUCTS_LOADING, status: false });
      });
  };
};
