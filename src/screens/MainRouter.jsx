import React from 'react';
import { Switch, Route } from 'react-router-dom';


import ScheduleRouter from './schedule/ScheduleRouter';

export default function MainRouter() {
  return (
    <Switch>
      <Route
        path="/"
        component={ScheduleRouter}
      />
    </Switch>
  );
}
