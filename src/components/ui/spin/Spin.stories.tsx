import React from 'react';
import { storiesOf } from '@storybook/react';
import Spin from './spin';

export default {
  title: 'Spin',
};

const Group: React.FC = ({ children }) => (
  <div style={{ padding: 48 }}>{children}</div>
);

const SpinWithSize = () => (
  <Group>
    <Spin />
    <Spin small />
  </Group>
);

storiesOf('Spin', module).add('with size', SpinWithSize);
