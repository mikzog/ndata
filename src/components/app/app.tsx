import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import './app.css';

const App: React.FC = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={'loading...'}>
          <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
