import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Support } from '@app/Support/Support';

const stories = storiesOf('Components', module);

stories.add(
  'Support',
  () => <Support />,
  { info: { inline: true } }
);