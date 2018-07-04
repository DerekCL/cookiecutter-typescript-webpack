import { FSA } from "@src/helpers/FSA";

/** Action type constants. */
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

/** Action type definitions. */
export type IncrementAction = FSA<typeof INCREMENT>;

export type DecrementAction = FSA<typeof DECREMENT>;

export type Action = IncrementAction | DecrementAction;

/** Action creators.  */
export function incrementCounter(): IncrementAction {
    return {
        type: INCREMENT,
    };
}

export function decrementCounter(): DecrementAction {
    return {
        type: DECREMENT,
    };
}
