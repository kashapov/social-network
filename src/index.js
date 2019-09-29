import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/state";

let renderEntireTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
