import React, { Component } from "react";

import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";
import store from "./state/store";

import MainRouter from "./screens/MainRouter";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <MainRouter />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
