// import axios from 'axios';
import { FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS, FETCH_FOODS_FAILURE } from './actionTypes';

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

// export const fetchFoods = () => dispatch => {
//   const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
//   dispatch(foodRequest);
//   axios.get(url)
//     .then(response => {
//       const foodRes = response.data;
//       dispatch(foodRequestSuccess(foodRes));
//       console.log(response);
//       console.log(foodRes);
//     })
//     .catch(error => {
//       const errorMsg = error.message;
//       dispatch(foodRequestFailure(errorMsg));
//     });
// };
