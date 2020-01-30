import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import { AuthProvider } from 'common/contexts/auth';
// import awsconfig from './aws-exports.js';
import store from './rootStore';
import * as serviceWorker from './serviceWorker';
import 'assets/css/common.css';
import 'assets/css/theme.css';
import 'assets/css/solutions-architects.css';

// Init Amplify config
Amplify.configure({});

const renderApp = () => {
  const App = require('components/app').default;
  ReactDOM.render(
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>,
    document.getElementById('root')
  );
};

// Render React App
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('components/app', renderApp);
}
