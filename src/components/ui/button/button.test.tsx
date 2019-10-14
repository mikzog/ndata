import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button';

describe('Button', () => {
  test('renders without crashing', () => {
    const component = renderer.create(<Button />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  test('renders without loading', () => {
    const component = renderer.create(<Button loading />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
