import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img width={240} src={logo} className="App-logo" alt="logo" />
        <h1>Hello nData!</h1>
      </header>
    </div>
  );
};

export default App;
