import { FETCH_FOODS_REQUEST, FETCH_FOODS_SUCCESS, FETCH_FOODS_FAILURE } from '../actions/actionTypes';

// const initialState = {
//   foods: {
//     meals: [
//       {
//         id: 1,
//         name: 'fish',
//         category: 'Desert',
//         area: 'French',
//         instructions: 'Preheat the oven to 180°C/350°F/Gas Mark 4.',
//       },
//       {
//         id: 2,
//         name: 'fruits',
//         category: 'Desert',
//         area: 'British',
//         instructions: 'Cut each chicken breast in about 3 pieces.',
//       },
//       {
//         id: 3,
//         name: 'Cream Cheese Tart',
//         category: 'Starter',
//         area: 'Mexican',
//         instructions: 'Crust: make a dough from 250g flour',
//       },
//       {
//         id: 4,
//         name: 'Milk',
//         category: 'Breakfast',
//         area: 'Polish',
//         instructions: 'Whatever',
//       },
//     ],
//     error: '',
//   },
// };

const initialState = {
  foods: {
    meals: [],
  },
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
