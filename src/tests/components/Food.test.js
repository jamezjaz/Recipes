import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Food from '../../components/Food';

describe('<Food />', () => {
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
  
  it('renders an image', () => {
    const { queryAllByTestId } = render(
      <Router>
          <Food food={food} />
      </Router>,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
          <Food food={food} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).toBeTruthy();
  });

  it('renders an image corecctly', () => {
    const { queryAllByTestId } = render(
      <Router>
          <Food food={food} />
      </Router>,
    );
    const image = queryAllByTestId('img');
    expect(image[0]).toBeFalsy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
          <Food food={food} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).not.toBeFalsy();
  });
});