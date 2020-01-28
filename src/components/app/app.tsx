import React, { Suspense } from 'react';
// import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageLogoLoader } from 'components/ui/placeholder';
import Routes from '../routes';
import 'assets/css/widget.css';

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

// export default process.env.NODE_ENV === 'development' ? hot(module)(App) : App;
export default App;
