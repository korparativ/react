import {configureStore} from "@reduxjs/toolkit";
import addReducer from "../reducers/ProductSlice";

export const store = configureStore({
        reducer: {
            addList: addReducer,
        },
});