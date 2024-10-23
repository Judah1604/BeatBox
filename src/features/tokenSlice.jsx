import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const tokenSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeToken: (state, value) => {
			state.value = value.payload;
		}
	},
});

// Action creators are generated for each case reducer function
export const { changeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
