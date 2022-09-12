import { useSelector } from "react-redux";
import { AppHeader, AuthBar, TaskInput, TaskList, Auth } from "./components/";

// The App
const App = () => {

    const { auth } = useSelector(store => store);

    if (!auth.isAuthenticated) {
        return (
            <div className="h-screen bg-gray-200">
                <Auth />
            </div>
        );
    }

    return (
        <div className="app-container">
            <AuthBar />
            <AppHeader />
            <TaskInput />
            <TaskList />
        </div>

    );
}

export default App;