import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: '',
};

export const tokenSlice = createSlice({
	name: "token",
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
