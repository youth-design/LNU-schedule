import React from 'react';

import Grid from '@material-ui/core/Grid';

// eslint-disable-next-line import/no-unresolved
import Header from 'screens/shared/components/header/Header';

export default function ScheduleRouter() {
  return (
    <Grid>
      <Header withMenuButton>
        Главная
      </Header>
    </Grid>
  );
}
