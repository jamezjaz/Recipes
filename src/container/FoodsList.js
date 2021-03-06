import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import FoodsListStyles from '../styles/FoodsList.module.css';
import fetchFoods from '../apiRequests/getRequest';
import FoodFilter from '../components/FoodFillter';
import { foodFilterAction } from '../actions';
import Food from '../components/Food';

const FoodsList = props => {
  const { foods, fetchedFoods, filtered } = props;

  const handleFilterChange = category => {
    const { filter } = props;
    filter(category);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    fetchedFoods(foods);
  }, []);

  const filteredFoods = foods.filter(food => (
    !!((filtered === null || filtered === food.strCategory))));

  return (
    <div className={FoodsListStyles.foods}>
      <FoodFilter handleFilter={handleFilterChange} foods={foods} />
      {loading === true
        ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={150}
            width={150}
            timeout={3000} // 3 secs
          />
        )
        : (
          <table className="d-flex flex-wrap">
            {filteredFoods.map(food => (
              <Food key={food.idMeal} food={food} />
            ))}
          </table>
        )}
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
