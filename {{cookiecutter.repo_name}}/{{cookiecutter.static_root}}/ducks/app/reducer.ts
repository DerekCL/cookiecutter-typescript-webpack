import { Action, DECREMENT, INCREMENT } from "./actions";
import { initialState, State } from "./state";

export default function counter(state: State = initialState, action: Action) {
    let modfiedState = {...state}
    switch (action.type) {
        case INCREMENT:
            modfiedState.count = modfiedState.count + 1;
            return modfiedState;
        case DECREMENT:
            modfiedState.count = modfiedState.count - 1;
            return modfiedState;
        default:
            return state;
    }
}
