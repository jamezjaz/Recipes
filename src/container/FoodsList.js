import React from 'react';
import FoodsListStyles from '../styles/FoodsList.module.css';

const FoodsList = (props) => (
  const { foods } = props;
  <div className={FoodsListStyles.foods}>
    <h3>Food One</h3>
    <h3>Food Two</h3>
    <h3>Food Three</h3>
    <h3>Food Four</h3>
    <h3>Food Five</h3>
    <h3>Food Six</h3>
    <h3>Food Seven</h3>
    <h3>Food Eight</h3>
  </div>
);

const mapStateToProps = state => ({
  foods: state.foods,
});

export default FoodsList;
