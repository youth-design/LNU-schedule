import React from "react";

import Grid from "@material-ui/core/Grid";

import Header from "screens/shared/components/header/Header";

export default function MainScreen() {
  return (
    <Grid direction="column" container>
      <Grid item>
        <Header withMenuButton>Главная страница</Header>
      </Grid>
    </Grid>
  );
}
