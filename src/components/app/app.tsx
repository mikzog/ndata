import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Routes from '../routes';
import './app.css';

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(res => {
        console.log({ res });
        setAuthenticated(true);
      })
      .catch(err => {
        console.log({ err });
        setAuthenticated(false);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={'loading...'}>
          <Routes appProps={{ authenticated }} />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
