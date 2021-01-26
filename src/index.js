// dependencies:
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// child components:
import App from "./components/App-container";
// styles:
import "./reset.scss";
import "./index.scss";
// store:
import { store } from "./store";
// render:
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#app")
);
