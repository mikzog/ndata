import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('Input', () => {
  test('renders without crashing', () => {
    const component = renderer.create(<Input />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  test('renders with prefix', () => {
    const component = renderer.create(<Input prefix="$" />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
