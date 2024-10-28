import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

export const URISlice = createSlice({
	name: "uri",
	initialState,
	reducers: {
		changeURI: (state, value) => {
			state.value = value.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeURI } = URISlice.actions;

export default URISlice.reducer;
