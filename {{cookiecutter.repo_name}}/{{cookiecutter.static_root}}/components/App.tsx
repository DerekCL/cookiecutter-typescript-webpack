import * as React from "react";

interface Props {
    children?: any;
}

export default class App extends React.Component<Props> {
    render() {
        return <main>{this.props.children}</main>;
    }
}
