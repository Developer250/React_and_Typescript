import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { Itask } from './Interfaces';



const App: FC = () => {
    //Alustetaan tehtävänimike ja eräpäivä sekä tehtävälista

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


    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName != taskNameToDelete
        }))
    };

    


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
                    return <TodoTask key={key} task={task} completeTask={completeTask}></TodoTask>;
                })}
                    
            </div>
        </div> 
    );
};

export default App;
