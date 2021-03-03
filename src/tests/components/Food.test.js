import React from 'react';
// import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Food from '../../components/Food';

// afterEach(cleanup);

const food = {
  foods: {
    meals: [{name: 'Chicken', category: 'Desert'},{name: 'Pizza', category: 'Starter'}]
  }
}

it('it renders correctly', () => {
  const tree = renderer
  .create(
    <Router>
        <Food food={food} />
    </Router>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});