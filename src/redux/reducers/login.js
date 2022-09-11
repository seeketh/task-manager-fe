// effect while login is pending
export const loginPending = (state) => {
    state.isLoading = true;
}

// effect when login is fullfilled
export const loginFulfilled = (state, action) => {
    console.log(action.payload);
    state.isLoading = false;
    state.isAuthenticated = true;
    state.errorMsg = "";
}

// effect when login is rejected
export const loginRejected = (state, action) => {
    state.isLoading = false;
    state.errorMsg = action.payload;
}