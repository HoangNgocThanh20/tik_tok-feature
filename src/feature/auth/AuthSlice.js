import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: false,
    reducers: {
        showModal(state,action){
            return true
        },
    }
})

const { actions, reducer } = AuthSlice;
export const {showModal} = actions;
export default reducer;