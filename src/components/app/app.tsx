import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageLogoLoader } from 'components/ui/placeholder';
import Routes from '../routes';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<PageLogoLoader />}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
