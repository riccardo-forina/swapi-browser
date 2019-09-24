import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PlanetPagination } from '@app/PlanetPagination/PlanetPagination';

const stories = storiesOf('PlanetPagination', module);

stories.add(
  'PlanetPagination',
  () => {
    return <PlanetPagination perPage={10} page={1}/>
  }
);