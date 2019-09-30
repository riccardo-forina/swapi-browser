import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './Dashboard';
import { shallow, mount } from 'enzyme';
import { Title, PageSection } from '@patternfly/react-core';

it('shallow renders without crashing', () => {
  shallow(<Dashboard />);
});

it('title has an appropriate message', () => {
  const wrapper = mount(<Dashboard />);
  const title = wrapper.find(Title);
  expect(title.text()).toBe("Dashboard Page Title");
});

it('dashboard contains page section', () => {
  const wrapper = mount(<Dashboard />);
  expect(wrapper.contains(<PageSection><Title size="lg">Dashboard Page Title</Title></PageSection>)).toEqual(true);
});
