import { createSelector } from "reselect";

import { State as RootState } from "@src/store/configureStore";

/** Get the app duck state. */
const getApp = (state: RootState) => state.app;

export const count = createSelector(getApp, app => app.count);
