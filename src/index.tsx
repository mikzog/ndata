import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports.js';
import * as serviceWorker from './serviceWorker';
import 'assets/css/common.css';
import 'assets/css/theme.css';

// Init Amplify config
Amplify.configure(awsconfig);

// Render React App
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
