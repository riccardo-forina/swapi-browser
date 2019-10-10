import React from 'react';
import { PlanetList } from './PlanetList';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import axios from "axios";
import { PlanetPagination } from '@app/PlanetPagination/PlanetPagination';

const wrapper = mount(<MemoryRouter initialEntries={[ '/planets?page=2' ]}><PlanetList/></MemoryRouter>);

it('shallow renders properly', () => {
  shallow(<MemoryRouter initialEntries={[ '/planets?page=2' ]}><PlanetList/></MemoryRouter>);
});

it('api call', async () => {
  const results = await axios.get(`https://swapi.co/api/planets/?page=3`);
  expect(results.data).toBeDefined();
});
