import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PlanetList } from '@app/PlanetList/PlanetList';
import StoryRouter from 'storybook-react-router';

const stories = storiesOf('PlanetList', module).addDecorator(StoryRouter());

// stories.add(
//   'PlanetList',
//   () => {
//     return <PlanetList/>
//   },
//   { info: { inline: true } }
// );