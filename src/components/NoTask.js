// This component will show when user has not tasks.

const NoTask = () => {
    return (
        <div
            className="sm:w-3/4 lg:w-1/2 w-full bg-gray-100 rounded h-20 p-1 mb-4 drop-shadow-md"
        >
            <div className="w-full h-full pr-2 flex flex-col">
                <div className="text-slate-600 text-lg">
                    You have no any Task at the moment.
                </div>
                <div className="text-slate-400">
                    Go ahead, and add new tasks!
                </div>
            </div>
            
        </div>
    );
}

export { NoTask };