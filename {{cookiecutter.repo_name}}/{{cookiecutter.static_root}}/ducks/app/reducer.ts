import { Action, DECREMENT, INCREMENT } from "./actions";
import { initialState, State } from "./state";

export default function counter(state: State = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            state.count = state.count + 1;
            return state;
        case DECREMENT:
            state.count = state.count - 1;
            return state;
        default:
            return state;
    }
}
