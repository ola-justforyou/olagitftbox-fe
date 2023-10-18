import {
  SET_LIST_PRODUCTS,
  SET_LIST_PRODUCTS_LOADING,
  SET_LIST_PRODUCTS_ERROR,
} from '../../constants/actionType';
var initialState = {
  data: {},
  loading: false,
  error: null,
};

const productReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_LIST_PRODUCTS:
      return {
        ...state,
        data: action.data,
      };

    case SET_LIST_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_LIST_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default productReducer;
