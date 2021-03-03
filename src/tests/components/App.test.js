import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';
import Routes from '../../Routes';

Enzyme.configure({ adapter: new Adapter() });

it('renders Routes correctly', () => {
    const wrapper = shallow(<App />);
expect(wrapper.find(Routes)).toHaveLength(1);
});