import { configureStore } from "@reduxjs/toolkit";
import couterReducer from '../feature/Couter/CouterSlice'
import AuthSlice from '../feature/auth/AuthSlice'
const rootReducer = {
    counter: couterReducer,
    Modal: AuthSlice
}

const store = configureStore({
     reducer: rootReducer,
})

export default store;