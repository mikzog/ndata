import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Button',
};

const Group: React.FC = ({ children }) => (
  <div style={{ padding: 48 }}>{children}</div>
);

const ButtonWithType = () => (
  <Group>
    <Button>default</Button>
    <Button type="blue">blue</Button>
    <Button type="grey">grey</Button>
    <Button type="green">green</Button>
    <Button type="teal">teal</Button>
    <Button type="red">red</Button>
  </Group>
);

const ButtonWithOutline = () => (
  <Group>
    <Button>default</Button>
    <Button outline type="blue">
      blue
    </Button>
    <Button outline type="grey">
      grey
    </Button>
    <Button outline type="green">
      green
    </Button>
    <Button outline type="teal">
      teal
    </Button>
    <Button outline type="red">
      red
    </Button>
  </Group>
);

const ButtonWithLoading = () => (
  <Group>
    <Button loading type="blue">
      Button
    </Button>
    <Button loading type="green">
      Button
    </Button>
    <Button loading type="teal">
      Button
    </Button>
    <Button loading type="red">
      Button
    </Button>
  </Group>
);

const ButtonWithFull = () => (
  <Group>
    <Button full>Button</Button>
    <Button full type="blue">
      Button
    </Button>
    <Button full outline type="blue">
      Button
    </Button>
    <Button full type="red">
      Button
    </Button>
    <Button full outline type="red">
      Button
    </Button>
  </Group>
);

const ButtonWithAction = () => (
  <Group>
    <Button onClick={action('clicked')}>Click me</Button>
  </Group>
);

storiesOf('Button', module)
  .add('with type', ButtonWithType)
  .add('with outline', ButtonWithOutline)
  .add('with loading', ButtonWithLoading)
  .add('with full', ButtonWithFull)
  .add('with action', ButtonWithAction);
