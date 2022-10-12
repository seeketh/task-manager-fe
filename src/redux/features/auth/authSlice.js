import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from '../../../config/constants';
import { loginFulfilled, loginPending, loginRejected } from '../../reducers/login';
import { logoutFulfilled, logoutPending, logoutRejected } from '../../reducers/logout';
import { registerFulfilled, registerPending, registerRejected } from '../../reducers/register';
import { setErrorMsgReducer } from '../../reducers/setErrorMsg';
import { setPendingCountReducer } from '../../reducers/setPendingCount';
import { initialAuthState } from './authState';

const initialState = initialAuthState;

export const login = createAsyncThunk('auth/login', async ({email, password}, thunkAPI) => {
    try {
        const res = await axios.post(LOGIN_URL, {email, password});
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('login failed');
    }
});

const register = createAsyncThunk('auth/register', async ({name, email, password}, thunkAPI) => {
    try {
        const res = await axios.post(REGISTER_URL, {name, email, password});
        return res.data;
    } catch (eror) {
        return thunkAPI.rejectWithValue('register failed')
    }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const res = await axios.post(LOGOUT_URL);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('logout failed');
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setPendingCount: setPendingCountReducer,
        setErrorMsg: setErrorMsgReducer
    },
    extraReducers: {
        [login.pending]: loginPending,
        [login.fulfilled]: loginFulfilled,
        [login.rejected]: loginRejected,
        [register.pending]: registerPending,
        [register.fulfilled]: registerFulfilled,
        [register.rejected]: registerRejected,
        [logout.pending]: logoutPending,
        [logout.fulfilled]: logoutFulfilled,
        [logout.rejected]: logoutRejected
    }
});

const authReducer = authSlice.reducer;

export { authReducer };
export const { setPendingCount, setErrorMsg } = authSlice.actions;
