import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodsListStyles from '../styles/FoodsList.module.css';
import fetchFoods from '../apiRequests/getRequest';
import FoodFilter from '../components/FoodFillter';
import { foodFilterAction } from '../actions';

const FoodsList = props => {
  const { foods, fetchedFoods, filtered } = props;

  const handleFilterChange = category => {
    const { filter } = props;
    filter(category);
  };

  useEffect(() => {
    fetchedFoods(foods);
  }, []);

  const filteredBooks = foods.filter(food => (
    !!((filtered === null || filtered === food.strCategory))));

  return (
    <div className={FoodsListStyles.foods}>
      <FoodFilter handleFilter={handleFilterChange} foods={foods} />
      {filteredBooks.map(food => (
        <div
          key={food.idMeal}
          food={food}
        >
          <div className="row">
            <div className="col-sm-12">{food.idMeal}</div>
            <br />
            <div className="col-sm-12">{food.strMeal}</div>
            <br />
            <div className="col-sm-12">{food.strCategory}</div>
            <br />
            <div className="col-sm-12">{food.strArea}</div>
            <br />
            {/* <div>{food.strInstructions}</div>
            <br /> */}
            <div className="col-sm-12"><img src={food.strMealThumb} alt="mealLogo" className="w-25" /></div>
            <br />
          </div>
        </div>
      ))}
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
  filter: PropTypes.func.isRequired,
  filtered: PropTypes.string,
};

FoodsList.defaultProps = {
  filtered: null,
};

const mapStateToProps = state => ({
  foods: state.food.foods.meals,
  filtered: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchedFoods: foods => dispatch(fetchFoods(foods)),
  filter: strCategory => {
    dispatch(foodFilterAction(strCategory));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
