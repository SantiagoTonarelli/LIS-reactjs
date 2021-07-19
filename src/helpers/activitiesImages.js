export const activitiesImages = (name) =>
	require.context("../images/activities", true)(name)?.default;
