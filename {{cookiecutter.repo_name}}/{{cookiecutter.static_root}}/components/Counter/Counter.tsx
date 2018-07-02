import React from "react";

const { PropTypes, Component } = React;

export default class Counter extends Component {
    static propTypes = {
        decrementCounter: PropTypes.func.isRequired,
        incrementCounter: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired,
    };

    render() {
        const { value, incrementCounter, decrementCounter } = this.props;

        return (
            <div className="counter">
                <h1>Counter: {value}</h1>
                <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
                <hr />
            </div>
        );
    }
}
