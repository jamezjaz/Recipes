import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodFilter from '../../components/FoodFillter';

afterEach(cleanup);

const foods = [
  {id: 1, name: 'Food name', category: 'Starter'},
  {id: 2, name: 'Food name', category: 'Starter'},
];

it('renders correctly', () => {
  const tree = renderer
    .create(<FoodFilter handleFilter={() => 'mock'} key={foods.id} foods={foods} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});