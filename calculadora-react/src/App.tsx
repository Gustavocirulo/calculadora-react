import React from 'react';
import './App.css';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora React</h1>
        <Calculadora />
      </header>
    </div>
  );
}

export default App;