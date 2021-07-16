import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
    name: 'couter',
    initialState: 1,
    reducers: {
        increase(state,action){
            return state + action.payload
        },
        decrease(state){
            return state - 1;
        }
    }
})

const { actions, reducer } = couterSlice;
export const {increase,decrease} = actions;
export default reducer;