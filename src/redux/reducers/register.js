// effect when register is pending
export const registerPending = (state) => {
    state.isLoading = true;
}

// effect when register is fullfilled
export const registerFulfilled = (state, action) => {
    console.log(action.payload);
    state.isLoading = false;
    state.isAuthenticated = true;
    state.errorMsg = "";
}

// effect when register is rejected
export const registerRejected = (state, action) => {
    state.isLoading = false;
    state.errorMsg = action.payload;
}