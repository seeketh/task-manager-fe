// Manages Task listing and paging

import { Fragment } from "react";
import { Task } from "./Task";
import { TaskListFooter } from "./TaskListFooter";

const TaskList = () => {

    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center w-full">
                <Task />
                <Task /> 
                <Task /> 
                <Task />
                <Task />  
            </div>
            <TaskListFooter />
        </Fragment>


    );
}

export { TaskList };