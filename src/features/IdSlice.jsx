import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

export const IdSlice = createSlice({
	name: "id",
	initialState,
	reducers: {
		changeId: (state, value) => {
			state.value = value.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeId } = IdSlice.actions;

export default IdSlice.reducer;
