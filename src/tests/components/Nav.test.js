import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../../components/Nav';

describe('<Nav />', () => {
  afterEach(cleanup);

  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
            <Nav />
        </Router>,
      )
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});

