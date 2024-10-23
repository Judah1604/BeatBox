import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const resultsSlice = createSlice({
	name: "results",
	initialState,
	reducers: {
		changeValue: (state, value) => {
			state.value = value.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeValue } = resultsSlice.actions;

export default resultsSlice.reducer;
