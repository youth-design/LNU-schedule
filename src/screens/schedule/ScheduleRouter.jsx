import React from "react";

import { Switch, Route } from "react-router-dom";

import Schedule from "./screens/schedule/Schedule";

export default function ScheduleRouter() {
  return (
    <Switch>
      <Route to="/" component={Schedule} />
    </Switch>
  );
}
