import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Header from "screens/shared/components/header/Header";

export default class Schedule extends Component {
  state = {};

  render() {
    return (
      <Grid direction="column" container>
        <Grid item>
          <Header withMenuButton>Расписание</Header>
        </Grid>
      </Grid>
    );
  }
}
