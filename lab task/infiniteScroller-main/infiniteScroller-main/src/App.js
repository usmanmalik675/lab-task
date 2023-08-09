import './App.css';


import React from 'react';
import InfiniteScroll from './infiniteScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroller</h1>
      </header>
      <main>
        <InfiniteScroll />
      </main>
    </div>
  );
}

export default App;
