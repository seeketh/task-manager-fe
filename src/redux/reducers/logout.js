import { initialAuthState } from "../features/auth/authState";

// effect when logout is pending
export const logoutPending = (state) => {
    state.isLoading = true;
}

// effect when logout is fullfilled
export const logoutFulfilled = (state, action) => {
    return initialAuthState;
}
// effect when logout is rejected
export const logoutRejected = (state, action) => {
    state.isLoading = false;
    state.errorMsg = action.payload;
}