import { createAction, createReducer } from "@reduxjs/toolkit";


const setUsername = createAction('set username');
const setToken = createAction('set token');
const resetUserInfo = createAction('reset user info');


const actions = {setToken, setUsername};

const initialState = {
    username: '',
    token: '',
};

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(setUsername, (state, action) => ({...state, username: action.payload}))
        .addCase(setToken, (state, action) => ({...state, token: action.payload}))
        .addCase(resetUserInfo, (state, action) => initialState)
});

export { reducer, actions };