import React from 'react';
import renderer from 'react-test-renderer';
import InputGroup from './input-group';

describe('InputGroup', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<InputGroup />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
