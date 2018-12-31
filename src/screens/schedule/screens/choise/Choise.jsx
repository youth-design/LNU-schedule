import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import { getFaculties } from "state/faculties/actions";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";

import GroupChoise from "./components/groupChoise/GroupChoise";
import Header from "screens/shared/components/header/Header";

import styles from "./Choise.module.sass";

const mapStateToProps = ({ facultiesReducer }) => ({
  facultiesReducer
});

const mapDispatchToProps = dispatch => ({
  facultiesActions: bindActionCreators(getFaculties, dispatch)
});

class Choise extends Component {
  state = {
    activeStep: 0,
    faculty: "",
    group: ""
  };

  componentDidMount() {
    this.props.facultiesActions();
  }

  facultyChange = e => {
    this.setState({
      group: "",
      activeStep: 1,
      faculty: e.target.value
    });
    this.props.history.push(`/schedule/${e.target.value}`);
  };

  render() {
    const { activeStep, faculty } = this.state;
    const { faculties, isFetching } = this.props.facultiesReducer;
    return (
      <Grid direction="column" className={styles.main} container>
        <Grid item>
          <Header withMenuButton>Выбор факультета</Header>
        </Grid>
        {isFetching ? (
          <span className={styles.loader}>
            <CircularProgress />
          </span>
        ) : (
          <React.Fragment>
            <Grid justify="center" container>
              <Grid xs={12} item>
                <Stepper className={styles.stepper} activeStep={activeStep}>
                  <Step>
                    <StepLabel>Выбор факультета</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Выбор группы</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Получение расписания</StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </Grid>
            <Grid
              className={styles.content}
              direction="column"
              alignItems="center"
              justify="center"
              container
            >
              <Paper className={styles.paper}>
                <Grid direction="column" container>
                  <Grid item>
                    <label className={styles.label}>
                      Выберите ваш факультет:
                    </label>
                    <FormControl className={styles.select}>
                      <InputLabel>Факультет</InputLabel>
                      <Select value={faculty} onChange={this.facultyChange}>
                        {faculties.map((faculty, id) => (
                          <MenuItem key={id} value={faculty.alias}>
                            {faculty.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Route
                      path="/schedule/:faculty"
                      render={params => (
                        <GroupChoise {...params} faculty={this.state.faculty} />
                      )}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choise);
