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
            <div className={FoodStyles.imgContainer}>
              <img src={food.strMealThumb} className={FoodStyles.img} alt="foodImg" />
            </div>
            <h4>{food.strMeal}</h4>
            <button type="button" className="btn btn-secondary">
              <Link className={FoodStyles.link} to="/foodDetails">
                <h4>Food Details</h4>
              </Link>
            </button>
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
