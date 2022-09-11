// Manages Task listing and paging

import { Task } from "./Task";
import { TaskListFooter } from "./TaskListFooter";

const TaskList = () => {

    return (

        <div className="task-list-container">
            <Task />
            <TaskListFooter />
        </div>

    );
}

export { TaskList };