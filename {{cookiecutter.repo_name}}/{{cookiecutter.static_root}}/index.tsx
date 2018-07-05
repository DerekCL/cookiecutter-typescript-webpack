import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import routes from "./routes";
import configureStore from "./store/configureStore";

const STORE = configureStore();
const ROOT_ELEMENT = "root";

// handle client side rendering
if (typeof document !== "undefined") {
    ReactDOM.render(
        <Provider store={STORE}>{routes}</Provider>,
        document.getElementById(ROOT_ELEMENT),
    );
}
