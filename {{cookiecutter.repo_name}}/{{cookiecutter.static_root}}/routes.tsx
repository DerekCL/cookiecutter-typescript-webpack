import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CounterApp from "./containers/CounterApp";

export default (
    <BrowserRouter>
        <Route exact path="/" component={CounterApp} />
    </BrowserRouter>
);
