import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import recipeImg from '../assets/recipeImg.jpg';

const FoodDetails = props => {
  const { foods } = props;
  return (
    <div className="container-fluid">
      <h2>Food Details</h2>
      <div>
        {foods.map(food => (
          <table className="table" key={food.idMeal} style={{ width: '100%' }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Area</th>
                <th scope="col">Instructions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{food.strMeal}</th>
                <td>
                  <img src={food.strMealThumb} className="w-100 rounded" alt="foodImg" />
                </td>
                <td>{food.strCategory}</td>
                <td>{food.strArea}</td>
                <td>{food.strInstructions}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

FoodDetails.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  foods: state.food.foods.meals,
});

export default connect(mapStateToProps, null)(FoodDetails);
