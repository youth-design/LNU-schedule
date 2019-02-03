import React, { Component } from "react";

import moment from "moment";
import "moment/locale/ru";

import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";
import store from "./state/store";

import MainRouter from "./screens/MainRouter";

class App extends Component {
  componentDidMount() {
    moment.locale("ru");
  }
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
