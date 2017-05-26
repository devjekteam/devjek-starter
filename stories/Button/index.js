import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../../src/components/Button';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    ));
