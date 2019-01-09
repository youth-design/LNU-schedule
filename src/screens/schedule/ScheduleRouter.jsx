import React from "react";

import { Switch, Route } from "react-router-dom";

import Schedule from "./screens/schedule/Schedule";

import NotFound from "screens/shared/screens/notFound/NotFound";

export default function ScheduleRouter() {
  return (
    <Switch>
      <Route to="/schedule/schedule/:faculty/:group" component={Schedule} />
      <Route component={NotFound} />
    </Switch>
  );
}
