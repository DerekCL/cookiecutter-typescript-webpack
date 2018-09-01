import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import app, {
    Action as AppAction,
    // epic as appEpic,
    initialState as appInitialState,
    State as AppState,
} from "@src/ducks/app";

/** The root state of the app. */
export interface State {
    app: AppState;
}

/** The root type of actions. */
export type Action = AppAction;

// /** The top level epic. */
// const epic = combineEpics(appEpic);

/** The top level reducer. */
const reducer = combineReducers<State | undefined>({
    app,
});

export const initialState = {
    app: appInitialState,
};

let composeEnhancers: typeof compose;
if (process.env.NODE_ENV !== "production") {
    composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}

/**
 * Create a Redux store for the `program-web` application.
 * @param state the initial state; if undefined, default state is used
 */
export default function configureStore(state?: State) {
    return createStore(
        reducer,
        state,
        composeEnhancers(
            applyMiddleware(
                logger, // For console redux state
                // createEpicMiddleware(epic), // create an instance of the actual redux-observable middleware
            ),
        ),
    );
}
