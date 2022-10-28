import { useState, useEffect } from "react";
import { Add } from "../icons/heroIcons/taskInput";
import { ALL_TASKS_URL } from "../config/constants";
import axios from "axios";


// Handles new Task input
const TaskInput = (props) => {
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
      if(props.editMode) {
        setNewTask(props.taskToEdit.task);
      }
    }, [props.editMode, props.taskToEdit])

    const handleInput = (e) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('we are handling..');
        if (!newTask) {
            // dispatch error
            console.log("empty task, nothing to do ...");
        } else {
            // create task
            try {
                let res;
                if (!props.editMode) {
                    res = await axios.post(ALL_TASKS_URL, {task: newTask}, {withCredentials: true});
                } else {
                    res = await axios.patch(`${ALL_TASKS_URL}/${props.taskToEdit._id}`, {task: newTask}, {withCredentials: true}); 
                }
                console.log(res)
                // Make sure we dont get stuck in task edit mode
                props.setEditMode(false);
                if (res.data.success) {
                    setNewTask("");
                    props.setTaskToEdit({});
                    // Trigger tasks version update for reloads
                    props.updateVersion(prevVersion => prevVersion + 1);
                    
                } else {
                    // dispatch failure reason
                    console.log(res.data.msg);
                }
            } catch (error) {
                // dispatch the error
                console.log(error);
            }
            
    
        }
    }

    return (
        <div className="flex justify-center items-center p-10">
            <input
                type={"text"}
                className="text-gray-400 border-y-2 border-l-2 border-r-0 border-gray-400 rounded-l-lg p-2 w-5/6 sm:w-3/4 lg:w-1/2 focus:border-gray-500 focus:ring-0"
                placeholder={"Enter new task"}
                onChange={handleInput}
                value={newTask}
            />
            <button
                className="border-y-2 border-r-2 border-l-0 border-gray-400 rounded-r-lg p-2 bg-green-400 hover:bg-green-500 text-slate-600"
                onClick={handleSubmit}
            >
                <Add />
            </button>
        </div>
    );
}

export { TaskInput };