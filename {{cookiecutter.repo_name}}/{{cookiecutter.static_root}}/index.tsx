import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./containers/App";

const STORE = configureStore();
const ROOT_ELEMENT = "root";

// handle client side rendering
if (typeof document !== "undefined") {
    ReactDOM.render(
        <Provider store={STORE}>
            <App/>
        </Provider>,
        document.getElementById(ROOT_ELEMENT),
    );
}
