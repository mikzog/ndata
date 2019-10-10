import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Button />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
