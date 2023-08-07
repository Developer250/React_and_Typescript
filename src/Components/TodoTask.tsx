import React from "react";
import { Itask } from "../Interfaces";


interface props {
    task?: Itask;
}

const todoTask = ({ task }: props) => {
    return <div>
        task
    </div>
};
export default todoTask; 