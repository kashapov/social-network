import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import state, { addPost, updateNewPostText, subscribe } from "./redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);
