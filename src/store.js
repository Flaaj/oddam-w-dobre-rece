// dependencies:
import { createStore } from "redux";
// reducers:
import { countReducer } from "./components/App-reducers.js";
// store:
export const store = createStore(
    countReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
