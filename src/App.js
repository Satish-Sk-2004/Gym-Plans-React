import './App.css';
import React from 'react';
import { Plans } from './Plans';
import { Navigation } from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>

      <main>
        <Plans/>
      </main>
    </div>
  );
}

export default App;
