import { FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS, FETCH_FOODS_FAILURE } from '../actions/actionTypes';

const initialState = {
  foods: {
    meals: [],
  },
  loading: false,
  error: '',
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOODS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOODS_SUCCESS:
      return {
        loading: false,
        foods: action.payload,
        error: '',
      };
    case FETCH_FOODS_FAILURE:
      return {
        loading: false,
        foods: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
