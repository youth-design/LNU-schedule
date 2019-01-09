import React from "react";

import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";
import store from "./state/store";

import MainRouter from "./screens/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MainRouter />
      </HashRouter>
    </Provider>
  );
}

export default App;
