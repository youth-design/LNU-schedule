import React from "react";

import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./state/store";

import MainRouter from "./screens/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  );
}

export default App;
