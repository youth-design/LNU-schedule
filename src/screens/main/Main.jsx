import React from "react";

import Grid from "@material-ui/core/Grid";

import Header from "screens/shared/components/header/Header";

export default function Main() {
  return (
    <Grid direction="column" container>
      <Grid item>
        <Header withMenuButton>Главная страница</Header>
      </Grid>
    </Grid>
  );
}
