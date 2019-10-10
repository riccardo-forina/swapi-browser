import React from 'react';
import { PlanetPagination } from './PlanetPagination';
import { shallow, mount } from 'enzyme';

const onSetPage = jest.fn();
const onPerPageSelect = jest.fn();

it('shallow renders without crashing', () => {
  shallow(<PlanetPagination onSetPage={onSetPage} onPerPageSelect={onPerPageSelect} page={1} perPage={10}/>);
});

it('on setPage works', () => {
  const wrapper = mount(<PlanetPagination onSetPage={onSetPage} onPerPageSelect={onPerPageSelect} page={1} perPage={10}/>);
  expect(wrapper.props().page).toBe(1);
});