import React from "react";
import { Switch, Route } from "react-router-dom";

import ScheduleRouter from "./schedule/ScheduleRouter";
import Main from "./main/Main";

import NotFound from "screens/shared/screens/notFound/NotFound";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/schedule" component={ScheduleRouter} />
      <Route component={NotFound} />
    </Switch>
  );
}
