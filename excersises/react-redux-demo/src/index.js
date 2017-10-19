import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers/index.js";

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
