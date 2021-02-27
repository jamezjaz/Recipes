import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodsListStyles from '../styles/FoodsList.module.css';

const FoodsList = props => {
  const { foods } = props;
  return (
    <div className={FoodsListStyles.foods}>
      {/* <div> */}
      {foods.map(food => (
        <div
          key={food.id}
          food={food}
        >
          {food.id}
          <br />
          {food.name}
          <br />
          {food.category}
          <br />
          {food.area}
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
};

const mapStateToProps = state => ({
  foods: state.foods.meals,
});

export default connect(mapStateToProps, null)(FoodsList);
