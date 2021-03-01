import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import FoodStyles from '../styles/FoodStyles.module.css';

const Food = props => {
  const { food } = props;
  return (
    <tbody>
      <tr>
        <td>
          <div className={FoodStyles.foodDetails}>
            <div>
              <img src={food.strMealThumb} className={FoodStyles.img} alt="foodImg" />
              <h4>{food.strMeal}</h4>
              <Link className={FoodStyles.link} to="/foodDetails">
                <span>Food Details</span>
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

Food.propTypes = {
  food: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};

export default Food;
