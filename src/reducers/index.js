import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
  food: foodReducer,
  filter: filterReducer,
});

export default rootReducer;
