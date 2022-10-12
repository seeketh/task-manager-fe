// Manages Task listing and paging

import { useState, useEffect, Fragment } from "react";
import { Task, TaskListFooter, NoTask, Auth } from "./index";
import { ALL_TASKS_URL } from "../config/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setErrorMsg } from "../redux/features/auth/authSlice";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);

    // OnMount load all tasks
    useEffect(() => {
        async function getAllTasks() {
            try {
                const res = await axios.get(ALL_TASKS_URL, {withCredentials: true});
                setTasks(res.data);
                console.log(res);
            } catch(error) {
                console.log(error);
            }
        }
        getAllTasks();
    }, []);

    if (auth.setErrorMsg) {
        <Auth />
    } else if (!tasks) {
        // userTasks.push(<NoTask />);
        return (
            <div className="flex flex-col items-center justify-center w-full">
                <NoTask />
            </div>
        );
    } else {
        const userTasks = [];
        tasks.forEach((task, index) => { userTasks.push(<Task key={task._id} task={task} pos={index} />); });
   
        return (
            <Fragment>
                <div className="flex flex-col items-center justify-center w-full">
                    {userTasks}
                </div>
                <TaskListFooter />
            </Fragment>
        );
        
    }


}

export { TaskList };