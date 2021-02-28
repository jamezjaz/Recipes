import {
  FETCH_FOODS_REQUEST,
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_FAILURE,
  CHANGE_FILTER,
} from './actionTypes';

export const foodRequest = () => ({
  type: FETCH_FOODS_REQUEST,
});

export const foodRequestSuccess = foods => ({
  type: FETCH_FOODS_SUCCESS,
  payload: foods,
});

export const foodRequestFailure = error => ({
  type: FETCH_FOODS_FAILURE,
  payload: error,
});

export const foodFilterAction = strCategory => ({
  type: CHANGE_FILTER,
  payload: strCategory,
});
