// import { useState } from "react";
import { useSelector } from "react-redux";
import { AuthBar, TaskInput, TaskList, Auth, Spinner } from "./components/";

// The App
const App = () => {

    const { auth } = useSelector(store => store);

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