import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CounterActions from "../actions/counterActions";
import Counter from "../components/Counter";

const { Component, PropTypes } = React;

class CounterApp extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        value: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div>
                <Counter value={this.props.value} {...this.props.actions} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        value: state.counter,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterApp);
