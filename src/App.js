import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Postform />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
