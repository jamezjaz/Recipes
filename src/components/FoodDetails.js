import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Player } from 'video-react';
import FoodDetailsStyles from '../styles/FoodDetails.module.css';

const FoodDetails = ({ foods, match }) => {
  const foodId = match.params.id;
  return (
    <div className="container-fluid">
      <h2 className={FoodDetailsStyles.heading}>Food Details</h2>
      <div>
        {foods.filter(food => food.idMeal === foodId).map(food => (
          <table className="table" key={food.idMeal} style={{ width: '100%' }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Area</th>
                <th scope="col">Instructions</th>
                <th scope="col">Video</th>
              </tr>
            </thead>
            <tbody className={FoodDetailsStyles.foodDetails}>
              <tr>
                <th scope="row">{food.strMeal}</th>
                <td>
                  <img src={food.strMealThumb} className="w-100 rounded" alt="foodImg" />
                </td>
                <td>{food.strCategory}</td>
                <td>{food.strArea}</td>
                <td>{food.strInstructions}</td>
                <td>
                  <Player
                    playsInline
                    poster="/assets/poster.png"
                    src={food.strYoutube}
                    fluid={false}
                    width={200}
                    height={150}
                  />
                </td>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

FoodDetails.defaultProps = {
  match: {},
};

const mapStateToProps = state => ({
  foods: state.food.foods.meals,
});

export default connect(mapStateToProps, null)(FoodDetails);
