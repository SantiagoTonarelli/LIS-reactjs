import {types} from "../types/types";
import {endLoading, startLoading} from "./ui";

export const startAddActivity = (activity) => {
	return (dispatch) => {
		dispatch(startLoading());
		setTimeout(() => {
			dispatch(addActivity(activity));
			dispatch(endLoading());
		}, 2000);
	};
};

const addActivity = (activity) => ({
	type: types.addActivity,
	payload: activity,
});

export const deleteSelectedActivity = () => ({
	type: types.deleteSelectedActivity,
});

export const addSelectedActivity = (activity) => ({
	type: types.addSelectedActivity,
	payload: activity,
});

export const finishAddActivity = () => ({
	type: types.finishAddActivity,
});
