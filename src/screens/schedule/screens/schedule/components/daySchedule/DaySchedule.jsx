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
              <Grid alignItems="center" container>
                <Grid className={styles.lessonNumber} item>
                  {iterator + 1}
                </Grid>
                <Grid item>
                  <Grid direction="column" container>
                    <Grid item>
                      <span>{lesson[week].name}</span>
                    </Grid>
                    <Grid item>
                      <span className={styles.teacher}>
                        {lesson[week].teacher}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <span>{lesson[week].timeStart}</span>
                </Grid>
                <Grid item>
                  <span className={styles.endTime}>{lesson[week].timeEnd}</span>
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
