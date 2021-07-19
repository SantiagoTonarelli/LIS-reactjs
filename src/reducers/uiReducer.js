import {types} from "../types/types";

const initialState = {
	loading: false,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.startLoading:
			return {
				...state,
				loading: true,
			};

		case types.endLoading:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};
