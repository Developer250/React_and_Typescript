import React from "react";
import { Itask } from "../Interfaces";

//M��ritell��n ominaisuuksisa varten ehdotukset, jotka toiminnallinen komponentti joutuu hyv�ksym��n
//eli k�ytt�j� voi hyv�ksy� teht�v�n
//K�ytt�j� voi poistaa teht�v�n//ITask on t�ss� tyyppi.xp
interface props {
    task: Itask;
    completeTask(taskNameToDelete: string): void;
}

//const todoTask on t�ss� toiminnallinen komponentti
//Toiminta komponentille tehd��n k�sky hyv�ksy� k�ytt�liittym�n ominaisuudet eli teht�v��n p��see vapaa p��sy
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