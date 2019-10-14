import React from 'react';
import renderer from 'react-test-renderer';
import Headline from './headline';

describe('Headline', () => {
  test('renders without crashing', () => {
    const component = renderer.create(<Headline />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  test('renders with correct tag', () => {
    const component = renderer.create(<Headline tag="h3" />);
    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });
});
