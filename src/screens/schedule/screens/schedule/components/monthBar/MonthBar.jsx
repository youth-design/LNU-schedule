import React from "react";
import moment from "moment";

import Grid from "@material-ui/core/Grid";

import styles from "./MonthBar.module.sass";

export default function MonthBar(props) {
  const { date } = props;
  return (
    <Grid className={styles.monthBar} alignItems="stretch" container>
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
          <Grid xs={4} item>
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
          <Grid xs={4} item>
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
    </Grid>
  );
}
