import {configureStore} from "@reduxjs/toolkit";
import {tasks} from "../data/tasks.js"
import { middleware, fetchTasksData} from "../actions/fetchTasksData.js";
const initialTheme = [];

const thunkReducer = (state=initialTheme, action) => {
    switch (action.type) {
        case 'GET_TASK':
           return tasks;
        default:
            return state;
}
};

export const store = configureStore({
        reducer: thunkReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});