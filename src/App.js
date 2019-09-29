import React from "react";

import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";

// import classes from "./App.css";

function App(props) {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="content">
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.messagesPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
      </div>
    </div>
  );
}

export default App;
