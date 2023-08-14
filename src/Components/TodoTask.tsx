import React from "react";
import { Itask } from "../Interfaces";

//Määritellään ominaisuuksisa varten ehdotukset, jotka toiminnallinen komponentti joutuu hyväksymään
//eli käyttäjä voi hyväksyä tehtävän
//Käyttäjä voi poistaa tehtävän//ITask on tässä tyyppi.xp
interface props {
    task: Itask;
    completeTask(taskNameToDelete: string): void;
}

//const todoTask on tässä toiminnallinen komponentti
//Toiminta komponentille tehdään käsky hyväksyä käyttöliittymän ominaisuudet eli tehtävään pääsee vapaa pääsy
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