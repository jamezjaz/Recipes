import axios from 'axios';
import { foodRequest, foodRequestSuccess, foodRequestFailure } from '../actions/index';

const fetchFoods = () => dispatch => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
  dispatch(foodRequest);
  axios.get(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => {
      const foodRes = response.data;
      dispatch(foodRequestSuccess(foodRes));
      console.log(response);
      console.log(foodRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(foodRequestFailure(errorMsg));
    });
};

export default fetchFoods;
