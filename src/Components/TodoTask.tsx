import React from "react";
import { Itask } from "../Interfaces";


interface props {
    task: Itask;
}

const TodoTask = ({ task }: props) => {
    return <div>
        {task.taskName} {task.deadline} </div>
};
export default TodoTask; 