import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
          <div className="header"></div>
          <input type="text" placeholder="...text"></input>
          <input type="number" placeholder="Deadline day"></input>

          <div className="todoList"></div>
    </div>
  );
}

export default App;
