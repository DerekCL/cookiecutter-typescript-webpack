import * as React from "react";

const { PropTypes, Component } = React;

export default class App extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        return <main>{this.props.children}</main>;
    }
}
