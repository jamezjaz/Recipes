import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Error from '../../components/Error';

describe('<Error />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Error />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains a header text', () => {
    render(
      <Router>
        <Error />
      </Router>,
    );
    expect(screen.getByText('Oops! Page not found!')).toBeInTheDocument();
  });
});
