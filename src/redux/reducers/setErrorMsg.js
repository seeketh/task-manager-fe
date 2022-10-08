// Set error message from the acton's payload
export const  setErrorMsgReducer = (state, action) => {
    state.errorMsg = action.payload;
}