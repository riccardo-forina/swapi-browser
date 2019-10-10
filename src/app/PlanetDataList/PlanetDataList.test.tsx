import React from 'react';
import { PlanetDataList } from './PlanetDataList';
import { shallow } from 'enzyme';
import { samplePlanets } from './PlanetDataList.stories';

it('shallow renders without crashing', () => {
  shallow(<PlanetDataList planets={samplePlanets}/>);
});
