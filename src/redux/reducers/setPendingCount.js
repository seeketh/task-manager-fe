// Sets the total number of pending Task
// Takes in state and set pending task count action

const setPendingCountReducer = (state, action) => {
    // immer lib allows  us to call for partial state mutation
    state.pendingTask = action.payload;
}

export { setPendingCountReducer };