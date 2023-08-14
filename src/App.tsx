import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { Itask } from './Interfaces';



const App: FC = () => {
    //Alustetaan teht�v�nimike ja er�p�iv� sek� teht�v�lista

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<Itask[]>([]);

    //handleChange-funktio, jota kutsutaan aina, kun k�ytt�j�n sy�tteiss� tekemiss� sy�tteiss� tapahtuu muutoksia
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        }
        else {
            setDeadline(Number(event.target.value));
        }
    };

    //Kutsutaan addTask-nappia, kun k�ytt�j� klikkaa nappia
    //Asetetaan setTodolist (eli teht�v�). Uuden teht�v�n lis�ys, kun k�ytt�j� klikkaa uuden teht�v�n
    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline }
        setTodoList([...todoList, newTask])
    }


    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName != taskNameToDelete
        }))
    };

    //K�ytt�j�n sy�tt�m� teksti-input sek� deadline-input sy�tt� laatikot ja buttoni, joka lis�� sy�tetyt arvot n�yt�lle
    //sek� k�ytt�j� voi poistaa teht�v�t
    //todoList.map -kohdassa k�yd��n l�pi jokainen elementti listassa ja tulostetaan n�yt�lle eli k�y
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
