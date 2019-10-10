import React from 'react';
import { Planet } from './Planet';
import { shallow, mount } from 'enzyme';
import { samplePlanets } from '@app/PlanetDataList/PlanetDataList.stories';

it('shallow renders without crashing', () => {
  shallow(<Planet planet={samplePlanets[0]}/>);
});

it('shows correct props', () => {
  const wrapper = mount(<Planet planet={samplePlanets[0]}/>);
  expect(wrapper.props().planet.diameter).toBe('12500');
});