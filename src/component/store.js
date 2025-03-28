import {configureStore} from "@reduxjs/toolkit";

const initialTheme = 'dark';

const toggleReducer = (state=initialTheme, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            if (state === 'dark') {
                return 'light';
            }
            if (state === 'light') {
                return 'dark';
            }
        default:
        return state;
    }
};

export const store = configureStore({
        reducer: toggleReducer,
});