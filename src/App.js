import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";

import classes from "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Sidebar />
        <div className="content">
          <Route path="/messages" component={Messages} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
