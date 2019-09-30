import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PlanetList } from '@app/PlanetList/PlanetList';
import StoryRouter from 'storybook-react-router';

const stories = storiesOf('PlanetList', module);

stories
  .addDecorator(StoryRouter())
  .add(
  'PlanetList',
  () => {
    return <PlanetList/>
  },
  { info: { inline: true } }
);