import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchFaculties } from "state/faculties/actions";
import { fetchGroups } from "state/groups/actions";
import { setFaculty } from "state/faculties/faculty/actions";
import { setGroup } from "state/groups/group/actions";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";

import GroupChoice from "./components/groupChoice/GroupChoice";
import Header from "screens/shared/components/header/Header";

import styles from "./Choice.module.sass";

class Choice extends Component {
  state = {
    activeStep: this.props.groupReducer.group
      ? 2
      : this.props.facultyReducer.faculty
      ? 1
      : 0,
    faculty: this.props.facultyReducer.faculty,
    group: this.props.groupReducer.group
  };

  componentDidMount() {
    this.props.actions.fetchFaculties();
  }

  componentDidUpdate(prevState) {
    if (prevState.location.pathname !== this.props.location.pathname) {
    }
  }

  changeFaculty = e => {
    this.setState({
      group: "",
      activeStep: 1,
      faculty: e.target.value
    });
    this.props.actions.setFaculty(e.target.value);
  };

  changeGroup = e => {
    this.setState({
      group: e.target.value,
      activeStep: 2
    });
    this.props.actions.setGroup(e.target.value);
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
                      <Select value={faculty} onChange={this.changeFaculty}>
                        {faculties.map((faculty, id) => (
                          <MenuItem key={id} value={faculty.alias}>
                            {faculty.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    {this.state.faculty && (
                      <GroupChoice
                        faculty={this.state.faculty}
                        groupsReducer={this.props.groupsReducer}
                        fetchGroups={this.props.actions.fetchGroups}
                        changeGroup={this.changeGroup}
                        group={this.state.group}
                      />
                    )}
                    {this.state.group && (
                      <div className={styles.button}>
                        <Button
                          color="primary"
                          onClick={() => {
                            this.props.history.push("/");
                          }}
                        >
                          Перейти к расписанию
                        </Button>
                      </div>
                    )}
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

const mapStateToProps = ({
  facultiesReducer,
  groupsReducer,
  facultyReducer,
  groupReducer
}) => ({
  facultiesReducer,
  groupsReducer,
  facultyReducer,
  groupReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchFaculties, fetchGroups, setFaculty, setGroup },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
