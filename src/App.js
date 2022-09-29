import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppHeader, AuthBar, TaskInput, TaskList, Auth, Spinner } from "./components/";

// The App
const App = () => {

    const [tasks, setTasks] = useState([]);

    /*const { auth } = useSelector(store => store);
    const dispatch = useDispatch();
    // console.log(dispatch);

    if (!auth.isAuthenticated) {
        if (!auth.isLoading) {
            return (
                <Auth errorMsg={ auth.errorMsg }/>
            );
        } else {
            return (
                <div class="h-screen bg-gray-100">
                    <Spinner />
                </div>
            );
        }
    }*/

    return (
        <div className="app-container">
            <AuthBar />
            {/*<AppHeader />*/}
            <TaskInput />
            <TaskList />
        </div>

    );
}

export default App;