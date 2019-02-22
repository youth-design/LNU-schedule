import React from "react";
import moment from "moment";

import Grid from "@material-ui/core/Grid";

import styles from "./MonthBar.module.sass";

export default function MonthBar(props) {
  const { date, week } = props;
  return (
    <Grid
      className={styles.monthBar}
      alignItems="stretch"
      justify="flex-start"
      container
    >
      <Grid item>
        <Grid
          direction="column"
          className={`${styles.monthContainer} ${
            moment().month() === date.month() ? styles.active : ""
          }`}
          alignItems="center"
          justify="center"
          onClick={props.setMonthDecorator(moment().month())}
          container
        >
          <Grid item>
            <div className={styles.dot} />
          </Grid>
          <Grid className={styles.monthTitle} item>
            <div>{moment().format("MMMM")}</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          className={`${styles.monthContainer} ${
            moment()
              .add(1, "month")
              .month() === date.month()
              ? styles.active
              : ""
          }`}
          direction="column"
          alignItems="center"
          justify="center"
          onClick={props.setMonthDecorator(
            moment()
              .add(1, "month")
              .month()
          )}
          container
        >
          <Grid item>
            <div className={styles.dot} />
          </Grid>
          <Grid className={styles.monthTitle} item>
            <div>
              {moment()
                .add(1, "month")
                .format("MMMM")}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={styles.weekContainer} item>
        <Grid className={styles.week} alignItems="center" container>
          <Grid className={styles.weekNumber} item>
            {week ? "1" : "2"}
          </Grid>
          <Grid className={styles.weekTitle} item>
            Неделя
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
