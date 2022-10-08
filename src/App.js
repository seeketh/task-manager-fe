import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthBar, TaskInput, TaskList, Auth, Spinner } from "./components/";

// The App
const App = () => {

    const [tasks, setTasks] = useState([]);

    const { auth } = useSelector(store => store);
    const dispatch = useDispatch();
    // console.log(dispatch);

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
                <TaskInput />
                <TaskList />
            </div>
    
        );
    }

}

export default App;