/** Action type constants. */
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

/** Action type definitions. */
export interface IncrementAction {
    type: typeof INCREMENT;
}

export interface DecrementAction {
    type: typeof DECREMENT;
}

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
