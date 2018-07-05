import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Switch } from "react-router"; // react-router v4

import App from "./containers/App";

const history = createBrowserHistory();

export default (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </div>
    </ConnectedRouter>
);
