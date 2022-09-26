// Spinner - animation to show before content is loaded

const Spinner = () => {

    return (
        <div className="flex justify-center items-center">
            <div
                className="h-16 w-16 border-t-red-300 border-l-red-200 border-4 border-solid rounded-full animate-spin"
            >
            </div>
        </div>
    );
}

export { Spinner };