import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
      <div className="App">
          <div className="header">
            <div className="inputContaineer">
             <input type="text" placeholder="...text"></input>
             <input type="number" placeholder="Deadline day"></input>
          </div>
              <button>Press</button>
          </div>
          <div className="todoList"></div>
      </div>
  );
}

export default App;
