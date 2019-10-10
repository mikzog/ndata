import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
