import React from "react";
import { Itask } from "../Interfaces";


interface props {
    task: Itask;
}

const TodoTask = ({ task }: props) => {
    return (
        <div className="task">
            <div className="content">
            <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button>x</button>
            </div>
    );  
};
export default TodoTask; 