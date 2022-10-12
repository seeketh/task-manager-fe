// effect while login is pending
export const loginPending = (state) => {
    state.isLoading = true;
}

// effect when login is fullfilled
export const loginFulfilled = (state, action) => {
    console.log(action.payload);
    state.isLoading = false;
    if (action.payload.success) {
        state.isAuthenticated = true;
        state.name = action.payload.name;
        state.errorMsg = "";
    } else {
        state.errorMsg = action.payload.msg;
    }

}

// effect when login is rejected
export const loginRejected = (state, action) => {
    state.isLoading = false;
    state.errorMsg = action.payload;
}