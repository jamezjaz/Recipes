import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodsListStyles from '../styles/FoodsList.module.css';
import fetchFoods from '../apiRequests/getRequest';

const FoodsList = props => {
  const { foods, fetchedFoods } = props;

  useEffect(() => {
    fetchedFoods(foods);
  }, []);
  return (
    <div className={FoodsListStyles.foods}>
      {/* <div> */}
      {foods.map(food => (
        <div
          key={food.idMeal}
          food={food}
        >
          {food.idMeal}
          <br />
          {food.strMeal}
          <br />
          {food.strCategory}
          <br />
          {food.strArea}
          <br />
          {food.strInstructions}
          <br />
          <img src={food.strMealThumb} alt="mealLogo" />
          <br />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    instructions: PropTypes.string,
  })).isRequired,
  fetchedFoods: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  foods: state.foods.meals,
});

const mapDispatchToProps = dispatch => ({
  fetchedFoods: foods => dispatch(fetchFoods(foods)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
