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
    <Button color="blue">blue</Button>
    <Button color="grey">grey</Button>
    <Button color="green">green</Button>
    <Button color="teal">teal</Button>
    <Button color="red">red</Button>
  </Group>
);

const ButtonWithOutline = () => (
  <Group>
    <Button>default</Button>
    <Button outline color="blue">
      blue
    </Button>
    <Button outline color="grey">
      grey
    </Button>
    <Button outline color="green">
      green
    </Button>
    <Button outline color="teal">
      teal
    </Button>
    <Button outline color="red">
      red
    </Button>
  </Group>
);

const ButtonWithLoading = () => (
  <Group>
    <Button loading color="blue">
      Button
    </Button>
    <Button loading color="green">
      Button
    </Button>
    <Button loading color="teal">
      Button
    </Button>
    <Button loading color="red">
      Button
    </Button>
  </Group>
);

const ButtonWithFull = () => (
  <Group>
    <Button full>Button</Button>
    <Button full color="blue">
      Button
    </Button>
    <Button full outline color="blue">
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
