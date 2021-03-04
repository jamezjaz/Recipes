import React from 'react';
import PropTypes from 'prop-types';
import FoodFilterStyles from '../styles/FoodFilter.module.css';

const FoodFilter = props => {
  const categories = ['All'];
  const { handleFilter, foods } = props;

  if (foods) {
    foods.map(food => {
      if (!categories.includes(food.strCategory)) {
        categories.push(food.strCategory);
      }
      return categories;
    });
  }

  const handleClick = event => {
    const { value } = event.target;
    if (value === 'All') {
      handleFilter(null);
    } else {
      handleFilter(value);
    }
  };

  return (
    <div>
      <label htmlFor="select" className="mx-auto my-0">
        <select className={FoodFilterStyles.select} name="category" id="select" data-testid="categories" onChange={handleClick}>
          <option disable="true" hidden>
            FOOD CATEGORIES
          </option>
          {categories.map(
            category => (
              <option value={category} key={category}>
                {category}
              </option>
            ),
          )}
        </select>
      </label>
    </div>
  );
};

FoodFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  foods: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
  })).isRequired,
};

export default FoodFilter;
