import { configureStore } from "@reduxjs/toolkit";
import localReducer from './Reducer_slices';

export const store = configureStore({
    reducer: {
        theme: localReducer
    }
});
