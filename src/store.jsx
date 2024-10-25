import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './features/tokenSlice'
import IdReducer from './features/IdSlice'

export const store = configureStore({
	reducer: {
        token: tokenReducer,
        id: IdReducer
    },
});

