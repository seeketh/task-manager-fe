import { AppHeader, AuthBar, TaskInput, TaskList } from "./components/";

// The App

const App = () => {

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