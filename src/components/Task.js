// Handles individual task content and behavior
// Content: Task name/description, statud. TODO: due date, 
// Behavior: Edit, Delete, mark complete. TODO: drag to reorder position
import { CheckCircle, PencilSquare, Trash } from '../icons/heroIcons/task';


const Task = () => {

    return (
        <div
            className="group flex justify-between items-center sm:w-3/4 lg:w-1/2 w-full bg-gray-100 rounded h-20 p-1 mb-4 drop-shadow-md"
        >
            <div className="">
                The task?
            </div>
            <div className="invisible group-hover:visible flex flex-col justify-center items-center">
                <CheckCircle />
                <PencilSquare />
                <Trash />
            </div>
            
        </div>
    );
}

export { Task };