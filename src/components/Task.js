// Handles individual task content and behavior
// Content: Task name/description, statud. TODO: due date, 
// Behavior: Edit, Delete, mark complete. TODO: drag to reorder position
import { CheckCircle, PencilSquare, Trash } from '../icons/heroIcons/task';
import { ALL_TASKS_URL as ACTION_URL } from '../config/constants';
import axios from 'axios';
 
const Task = ({task, position, updateVersion, setEditMode, setTaskToEdit}) => {
    // Function to handle marking of task completion
    const handleComplete = async (taskId, currentStatus) => {
        const changePayload = {
            completed: !currentStatus
        };

        console.log(changePayload);

        const completeURL = `${ACTION_URL}/${taskId}`;
        setEditMode(false);
        setTaskToEdit({});

        try {
            const res = await axios.patch(completeURL, changePayload);
            updateVersion(currentVersion => currentVersion + 1);
            console.log(res);
        } catch (error) {
            console.log(error)
        }

    }
    // Function to handle task editing
    const handleEdit= (taskId, taskText) => {
        setTaskToEdit({
            _id: taskId,
            task: taskText
        });
        setEditMode(true);
    }
    // Function to handle task deletion
    const handleDelete = async (taskId) => {
        const deleteURL = `${ACTION_URL}/${taskId}`;
        setEditMode(false);
        setTaskToEdit({});

        try {
            const res = await axios.delete(deleteURL);
            updateVersion(currentVersion => currentVersion + 1);
            console.log(res);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div
            className="group flex justify-between items-center sm:w-3/4 lg:w-1/2 w-full bg-gray-100 rounded h-20 p-1 mb-4 drop-shadow-md"
        >
            <div className="w-full h-full pr-2 flex flex-col">
                <div className="text-slate-600 text-lg">
                    {task.task}
                </div>
                <div className="text-slate-400">
                    {task.completed ? "Completed" : "Pending"}
                </div>
            </div>
            <div className="invisible group-hover:visible flex flex-col justify-center items-center text-slate-700">
                <div className="cursor-pointer" onClick={() => { handleComplete(task._id, task.completed) }}>
                    <CheckCircle />
                </div>
                <div className="cursor-pointer" onClick={() => { handleEdit(task._id, task.task) }}>
                    <PencilSquare />
                </div>
                <div className="cursor-pointer" onClick={() => { handleDelete(task._id) }}>
                    <Trash />
                </div>
            </div>
            
        </div>
    );
}

export { Task };