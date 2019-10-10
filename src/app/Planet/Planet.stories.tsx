import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Planet } from '@app/Planet/Planet';
import StoryRouter from 'storybook-react-router';
import { samplePlanets } from '@app/PlanetDataList/PlanetDataList.stories'

const stories = storiesOf('Planet', module).addDecorator(StoryRouter());

let planet = samplePlanets[0];

stories.add(
  'Planet',
  () => <Planet planet={planet}/>,
  { info: { inline: true } }
);