import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import About from '../../components/About';

Enzyme.configure({ adapter: new Adapter() });

describe('<About />', () => {
  it('renders correctly', () => {
      const tree = renderer
        .create(<About />)
        .toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('contains About Us header', () => {
    render(
      <Router>
        <About />
      </Router>,
    );
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('it contains p element with texts', () => {
    const wrapper = shallow(<About />);
    const para = <p>
      Catalogue of Recipes is the ultimate host for you to connect
      over a memorable, shared experience. We do this by providing
      unique entertainment in sophisticated, comfortable places to
      gather all served by our scratch kitchen. Our venue hosts a
      variety of events such as weddings, corporate events, and
      other social gatherings. We then host tailored combinations
      of dinning classic bowling, bocce, and events. All with amazing
      food and gracious service, so you can enjoy a genuine connecting
      with someone you care about.
    </p>;
    expect(wrapper.containsMatchingElement(para)).toBe(true);
  });
});