import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import styles from "./NotFound.module.sass";

export default function NotFound(props) {
  const goBackRoute = () => {
    props.history.goBack();
  };

  const goRootRoute = () => {
    props.history.push("/");
  };

  return (
    <Grid
      alignItems="center"
      justify="center"
      direction="column"
      className={styles.main}
      container
    >
      <Grid className={styles.notFound} item>
        404
      </Grid>
      <Grid item>Страница не найдена</Grid>
      <Grid justify="center" container>
        <Grid item>
          <Button onClick={goBackRoute}>Назад</Button>
        </Grid>
        <Grid item>
          <Button onClick={goRootRoute}>На главную</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
