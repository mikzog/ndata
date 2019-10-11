import React from 'react';
import { Button } from 'components/UI';
import logo from './ndata-logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img width={240} src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Button>Button</Button>
        <Button type="blue">Button</Button>
      </main>
    </div>
  );
};

export default App;
