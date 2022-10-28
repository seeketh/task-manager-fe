import { useState } from "react";
import { useSelector } from "react-redux";
import { AuthBar, TaskInput, TaskList, Auth, Spinner } from "./components/";

// The App
const App = () => {

    const { auth } = useSelector(store => store);
    // Local Tasks version. Changing this will cause tasks reloads.
    const [tasksVersion, setTasksVersion] = useState(0);
    // Controll App input mode
    const [editMode, setEditMode] = useState(false);
    // Task to edit
    const [taskToEdit, setTaskToEdit] = useState({});

    if (!auth.isAuthenticated) {
        if (!auth.isLoading) {
            return (
                <Auth />
            );
        } else {
            return (
                <div className="h-screen bg-gray-100">
                    <Spinner />
                </div>
            );
        }
    } else {
        return (
            <div className="">
                <AuthBar />
                <TaskInput
                    updateVersion={setTasksVersion}
                    version={tasksVersion}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    taskToEdit={taskToEdit}
                    setTaskToEdit={setTaskToEdit}
                />
                <TaskList
                    updateVersion={setTasksVersion}
                    version={tasksVersion}
                    setEditMode={setEditMode}
                    setTaskToEdit={setTaskToEdit}
                />
            </div>
    
        );
    }

}

export default App;