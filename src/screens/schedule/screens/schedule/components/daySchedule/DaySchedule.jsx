import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import styles from "./DaySchedule.module.sass";

export default function DaySchedule(props) {
  const { schedule, week } = props;
  return (
    <Grid direction="column" container>
      {schedule.map((lesson, iterator) => (
        <React.Fragment key={iterator.toString()}>
          <Grid className={styles.lessonCell} justify="space-between" container>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <span>{lesson[week].name}</span>
                </Grid>
                <Grid item>
                  <span className={styles.teacher}>{lesson[week].teacher}</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <span>8:15</span>
                </Grid>
                <Grid item>
                  <span className={styles.endTime}>9:45</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {schedule.length - 1 !== iterator && <Divider />}
        </React.Fragment>
      ))}
    </Grid>
  );
}
