import React from 'react';
import renderer from 'react-test-renderer';
import Spin from './Spin';

describe('Spin', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Spin />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
