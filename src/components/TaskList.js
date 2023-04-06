// Manages Task listing and paging

import { useState, useEffect, Fragment } from "react";
import { Task, TaskListFooter, NoTask, Auth } from "./index";
import { ALL_TASKS_URL, TASKS_LIMIT_COUNT } from "../config/constants";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
// import { setErrorMsg } from "../redux/features/auth/authSlice";

const TaskList = ({version, updateVersion, setEditMode, setTaskToEdit}) => {
    const [tasks, setTasks] = useState([]); // All tasks for the given page.
    const [tasksCount, setTasksCount] = useState(0); // The number of tasks for this user.
    const [page, setPage] = useState(1); // Current tasks' page.
    //const dispatch = useDispatch();
    const { auth } = useSelector(store => store);

    console.log("this is Auth data:", auth);

    // Load Tasks whenever version of a given task or tasks' page change.
    useEffect(() => {
        async function getAllTasks() {
            try {
                const res = await axios.get(`${ALL_TASKS_URL}/${page}/${TASKS_LIMIT_COUNT}`, {withCredentials: true});
                setTasks(res.data.tasks);
                setTasksCount(res.data.count);
                console.log(res);
            } catch(error) {
                // TODO: work on dispatching this error
                console.log(error);
            }
        }
        getAllTasks();
    }, [version, page]);

    if (auth.setErrorMsg) {
        <Auth />
    } else if (!tasks) {
        return (
            <div className="flex flex-col items-center justify-center w-full">
                <NoTask />
            </div>
        );
    } else {
        const userTasks = [];
        tasks.forEach((task, index) => {
            userTasks.push(<Task
                key={task._id}
                task={task}
                position={index}
                updateVersion={updateVersion}
                setEditMode={setEditMode}
                setTaskToEdit={setTaskToEdit}
            />); 
        });
   
        return (
            <Fragment>
                <div className="flex flex-col items-center justify-center w-full">
                    {userTasks}
                </div>
                <TaskListFooter currentPage={page} updatePage={setPage} userTasksCount={tasksCount} pageTasksCount={tasks.length} />
            </Fragment>
        );
        
    }
}

export { TaskList };