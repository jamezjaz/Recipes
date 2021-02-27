import * from './actionTypes';

export const foodRequest = () => {
  return {
    type: FETCH_FOODS_REQUEST,
  }
};

export const foodRequestSuccess = foods => {
  return {
    type: FETCH_FOODS_SUCCESS,
    payload: foods,
  }
};

export const foodRequestFailure = error => {
  return {
    type: FETCH_FOOD_FAILURE,
    payload: error,
  }
};