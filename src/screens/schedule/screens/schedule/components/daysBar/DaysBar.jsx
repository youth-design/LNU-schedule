import React from "react";
import moment from "moment";

import Grid from "@material-ui/core/Grid";

import styles from "./DaysBar.module.sass";

export default function DaysBar(props) {
  const { date } = props;

  function generateNumbers(days) {
    const daysCircles = [];
    for (let dayNumber = 1; dayNumber <= days; dayNumber++) {
      daysCircles.push(
        <Grid
          direction="column"
          alignItems="center"
          className={`${styles.circleContainer} ${
            dayNumber === date.date() ? styles.active : ""
          }`}
          key={dayNumber}
          onClick={props.setDayDecorator(dayNumber)}
          container
        >
          <Grid item>
            <div className={styles.circle}>{dayNumber}</div>
          </Grid>
          <Grid item>
            <div className={styles.dayTitle}>
              {moment(date)
                .date(dayNumber)
                .format("dd")}
            </div>
          </Grid>
        </Grid>
      );
    }
    return daysCircles;
  }

  return (
    <div className={styles.daysBar}>{generateNumbers(date.daysInMonth())}</div>
  );
}
