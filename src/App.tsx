import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { Itask } from './Interfaces';


const App: FC = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<Itask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        }
        else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline }
        setTodoList([...todoList, newTask])
        console.log(todoList);
    }


    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <input type="text" placeholder="...text" name="task" value={task} onChange={handleChange}></input>
                    <input type="number" placeholder="Deadline day " name="Deadline" value={deadline} onChange={handleChange}></input>
                </div>
                <button onClick={addTask} >Press</button>
            </div>
            <div className="todoList">
                {todoList.map((task: Itask, key: number) => {
                    return <todoTask key={key}></todoTask>
                })};
                    
                

            </div>
        </div> 
    );
};

export default App;
