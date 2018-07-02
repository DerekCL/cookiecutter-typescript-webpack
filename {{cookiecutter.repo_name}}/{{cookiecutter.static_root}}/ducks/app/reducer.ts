import { Action, DECREMENT, INCREMENT} from "./actions";
import { initialState, State } from "./state";

export default function counter(state: State = initialState, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state.count + 1;
        case DECREMENT:
            return state.count - 1;
        default:
            return state;
    }
}
