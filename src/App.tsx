import React, { FC, useState } from 'react';
import './App.css';


const App: FC = () => {

    const [task,setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0); 
    const [todo, setTodoList] = useState([]); 

    const handleChange = () => {

    }

  return (
      <div className="App">
          <div className="header">
            <div className="inputContainer">
                  <input type="text" placeholder="...text" onChange={handleChange}></input>
                  <input type="number" placeholder="Deadline day " onChange={handleChange}></input>
          </div>
              <button>Press</button>
          </div>
          <div className="todoList"></div>
      </div>
  );
}

export default App;
