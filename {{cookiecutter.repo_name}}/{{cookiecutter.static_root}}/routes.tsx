import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Switch } from "react-router"; // react-router v4

import CounterApp from "./containers/CounterApp";

const history = createBrowserHistory();

export default (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={CounterApp} />
            </Switch>
        </div>
    </ConnectedRouter>
);
