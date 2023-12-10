import { createAction, createReducer } from "@reduxjs/toolkit";


const login = createAction('login');
const logout = createAction('logout');

const actions = {login, logout};

const initialState = false;

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(login, (state, action) => state = true)
        .addCase(logout, (state, action) => state = false)
});

export { reducer, actions };
