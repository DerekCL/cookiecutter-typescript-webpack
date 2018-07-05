import * as React from "react";
import { pure } from "recompose";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    count: number;
}

class Counter extends React.Component<Props> {
    render() {
        const { count, incrementCounter, decrementCounter } = this.props;

        return (
            <div className="counter">
                <h1>Counter: {count}</h1>
                <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
                <hr />
            </div>
        );
    }
}

export default pure(Counter);
