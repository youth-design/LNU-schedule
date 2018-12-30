import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';

export default function MainRouter() {
  return (
    <Switch>
      <Route
        path="/"
        render={params => (<Home {...params} />)}
      />
    </Switch>
  );
}
