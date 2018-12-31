import React from "react";

import { Switch, Route } from "react-router-dom";

import Choise from "./screens/choise/Choise";

export default function ScheduleRouter() {
  return (
    <Switch>
      <Route to="/schedule" component={Choise} />
    </Switch>
  );
}
