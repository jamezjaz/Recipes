import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodFilter from '../../components/FoodFillter';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

const foods = [
  {id: 1, name: 'Food name', category: 'Starter'},
  {id: 2, name: 'Food name', category: 'Starter'},
];

describe('<FoodFilter />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FoodFilter handleFilter={() => 'mock'} key={foods.id} foods={foods} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it contains an option element', () => {
    const wrapper = shallow(<FoodFilter handleFilter={() => 'mock'} key={foods.id} foods={foods} />)
    const option = <option>FOOD CATEGORIES</option>;
    expect(wrapper.containsMatchingElement(option)).toBe(true);
  });

  it('renders a select input', () => {
    const { queryAllByTestId } = render(
      <FoodFilter handleFilter={() => 'mock'} key={foods.id} foods={foods} />,
    );
    const result = queryAllByTestId('categories');
    expect(result).toBeTruthy();
    expect(result[0]).toHaveTextContent('FOOD CATEGORIES');
    expect(result[0]).toHaveTextContent('All');
  });
});