import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import Amplify from 'aws-amplify';
import { AuthProvider } from 'contexts/auth';
import awsconfig from './aws-exports.js';
import * as serviceWorker from './serviceWorker';
import 'assets/css/common.css';
import 'assets/css/theme.css';
import 'assets/css/solutions-architects.css';

// Init Amplify config
Amplify.configure(awsconfig);

// Render React App
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
