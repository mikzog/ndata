import { configure } from '@storybook/react';
import '../src/assets/css/common.css';
import '../src/assets/css/theme.css';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
