import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Welcome from '../../src/components/Welcome';

storiesOf('Welcome', module)
    .add('to Storybook', () => (
        <Welcome showApp={linkTo('Button')}/>
    ));