import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={'loading...'}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
