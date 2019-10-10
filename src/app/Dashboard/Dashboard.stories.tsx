import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Dashboard } from '@app/Dashboard/Dashboard';

const stories = storiesOf('Components', module);

stories.add(
  'Dashboard',
  () => <Dashboard />,
  { info: { inline: true } }
); 