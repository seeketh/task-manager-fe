// Sets the total number of peinding Task
// It takes in state and set pending task count action

const setPendingCountReducer = (state, action) => {
    // immer lib allows  us to call for partial state mutation
    state.pendingTask = action.payload;
}

export { setPendingCountReducer };