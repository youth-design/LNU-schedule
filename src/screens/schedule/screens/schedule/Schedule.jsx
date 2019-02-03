import React, { Component } from "react";
import moment from "moment";

import Grid from "@material-ui/core/Grid";

import Header from "screens/shared/components/header/Header";

import MonthBar from "./components/monthBar/MonthBar";
import DaysBar from "./components/daysBar/DaysBar";

export default class Schedule extends Component {
  state = {
    date: moment()
  };

  setDayDecorator = day => () =>
    this.setState(({ date }) => ({ date: moment(date).date(day) }));

  setMonthDecorator = month => () =>
    this.setState(({ date }) => ({ date: moment(date).month(month) }));

  render() {
    const { date } = this.state;
    return (
      <Grid direction="column" container>
        <Grid item>
          <Header withMenuButton>
            <MonthBar date={date} setMonthDecorator={this.setMonthDecorator} />
          </Header>
        </Grid>
        <Grid item>
          <DaysBar date={date} setDayDecorator={this.setDayDecorator} />
        </Grid>
      </Grid>
    );
  }
}
