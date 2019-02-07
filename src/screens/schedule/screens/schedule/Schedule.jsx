import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import "moment/locale/ru";

import { fetchSchedule } from "state/schedule/actions";

import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "screens/shared/components/header/Header";

import MonthBar from "./components/monthBar/MonthBar";
import DaysBar from "./components/daysBar/DaysBar";
import DaySchedule from "./components/daySchedule/DaySchedule";

import styles from "./Schedule.module.sass";

class Schedule extends Component {
  state = {
    date: moment()
  };

  componentDidMount() {
    this.props.fetchSchedule(this.props.match.params.group);
  }

  setDayDecorator = day => () =>
    this.setState(({ date }) => ({ date: moment(date).date(day) }));

  setMonthDecorator = month => () =>
    this.setState(({ date }) => ({ date: moment(date).month(month) }));

  render() {
    const { date } = this.state;
    const { isFetching } = this.props;
    return (
      <Grid direction="column" container>
        <Grid item>
          <Header withMenuButton>
            <MonthBar
              date={date}
              setMonthDecorator={this.setMonthDecorator}
              week={date.week() % 2}
            />
          </Header>
        </Grid>
        <Grid item>
          <DaysBar date={date} setDayDecorator={this.setDayDecorator} />
        </Grid>
        {isFetching ? (
          <CircularProgress className={styles.loader} />
        ) : (
          <Grid item>
            <DaySchedule
              schedule={
                this.props.schedule.length !== 0 && date.weekday() <= 4
                  ? this.props.schedule[date.weekday()]
                  : []
              }
              week={date.week() % 2}
            />
          </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = ({ scheduleReducer }) => ({
  ...scheduleReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSchedule }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
