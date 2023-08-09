import React from "react";
import { Itask } from "../Interfaces";


interface props {
    task: Itask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: props) => {
    return (
        <div className="task">
            <div className="content">
            <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {
                completeTask(task.taskName);
            }}
            >x</button>
            </div>
    );  
};
export default TodoTask; 