import {types} from "../types/types";

const initialState = {
	activities: [],
	activity: null,
	finishAdd: false,
};

export const activitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addActivity:
			return {
				...state,
				activities: [action.payload, ...state.activities].sort(
					(a, b) => a.date - b.date
				),
				finishAdd: true,
			};

		case types.deleteSelectedActivity:
			return {
				...state,
				activity: null,
			};

		case types.addSelectedActivity:
			return {
				...state,
				activity: action.payload,
			};
		case types.finishAddActivity:
			return {
				...state,
				finishAdd: false,
			};

		default:
			return state;
	}
};
