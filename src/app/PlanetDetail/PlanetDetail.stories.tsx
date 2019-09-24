import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PlanetDetail } from '@app/PlanetDetail/PlanetDetail';
import StoryRouter from 'storybook-react-router';

const stories = storiesOf('PlanetDetail', module).addDecorator(StoryRouter());

const computed = { params: { id: 1 } };

stories.add(
  'PlanetDetail',
  () => {
    return <PlanetDetail computedMatch={computed}/>
  },
  { info: { inline: true } }
);