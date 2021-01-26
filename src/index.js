// dependencies:
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// child components:
import App from "./components/App";
// styles:
import "./settings/main.scss"
// store:
import { store } from "./store";
// render:
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#app")
);
