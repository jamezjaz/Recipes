import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from '../../components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('<Nav />', () => {
  afterEach(cleanup);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

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

  test('contains Catalogue Of Recipes header', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(screen.getByText('Catalogue Of Recipes')).toBeInTheDocument();
  });

  test('it contains li element', () => {
    const li = <li>Recipes</li>;
    expect(wrapper.containsMatchingElement(li)).toBe(true);
  });

  test('h2 element has a text', () => {
    const h2 = wrapper.find('.my-logo');
    expect(h2.text()).toEqual('Catalogue Of Recipes');
  });

  test('it contains a Link', () => {
    const link = <Link><li>About Us</li></Link>;
    expect(wrapper.containsMatchingElement(link)).toBe(true);
  });
});

