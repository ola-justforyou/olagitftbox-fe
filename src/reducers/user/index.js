import {
  SET_USER,
  SET_LIST_USERS,
  SET_USER_LOADING,
  SET_USER_ERROR,
} from '../../constants/actionType';
var initialState = {
  data: {},
  datas: {},
  categories: {},
  loading: false,
  error: null,
};

const userReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.data,
      };
    case SET_LIST_USERS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default userReducer;
