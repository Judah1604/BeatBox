import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './features/tokenSlice'
import resultsReducer from './features/resultsSlice'

export const store = configureStore({
	reducer: {
        token: tokenReducer,
        results: resultsReducer
    },
});

